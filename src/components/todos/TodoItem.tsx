import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar, Clock, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useState } from "react";
import { TodoForm } from "./TodoForm";

interface TodoItemProps {
  todo: Doc<"todos">;
}

const priorityStyles = {
  low: {
    glow: "hover:shadow-[0_0_20px_theme(colors.secondary/25%)]",
    gradient: "from-cyan-500/10 via-black/0 to-purple-500/10",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  medium: {
    glow: "hover:shadow-[0_0_20px_theme(colors.accent/25%)]",
    gradient: "from-purple-500/10 via-black/0 to-pink-500/10",
    border: "border-purple-500/20",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
  high: {
    glow: "hover:shadow-[0_0_20px_theme(colors.primary/25%)]",
    gradient: "from-pink-500/10 via-black/0 to-red-500/10",
    border: "border-pink-500/20",
    badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  },
};

export function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleToggle = async () => {
    try {
      await toggleTodo({ id: todo._id });
      toast.success(todo.completed ? "Todo marked as incomplete" : "Todo completed!");
    } catch (error) {
      toast.error("Failed to update todo");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo({ id: todo._id });
      toast.success("Todo deleted");
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };

  const styles = priorityStyles[todo.priority];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`group p-4 rounded-xl border bg-gradient-to-r transition-all duration-300 ${
        todo.completed
          ? "bg-card/50 border-border/50 opacity-60"
          : `${styles.glow} ${styles.gradient} ${styles.border}`
      }`}
    >
      <div className="flex items-start space-x-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggle}
          className="mt-1"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3
                className={`font-medium text-lg leading-tight ${
                  todo.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {todo.title}
              </h3>
              
              {todo.description && (
                <p
                  className={`mt-1 text-sm ${
                    todo.completed ? "line-through text-muted-foreground" : "text-muted-foreground"
                  }`}
                >
                  {todo.description}
                </p>
              )}
              
              <div className="flex items-center space-x-3 mt-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                    styles.badge
                  }`}
                >
                  {todo.priority}
                </span>
                
                {todo.dueDate && (
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{format(new Date(todo.dueDate), "MMM d, yyyy")}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{format(new Date(todo._creationTime), "MMM d")}</span>
                </div>
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
          </DialogHeader>
          <TodoForm
            todo={todo}
            onSuccess={() => setIsEditOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}