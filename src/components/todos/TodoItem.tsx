import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
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

const priorityColors = {
  low: "bg-blue-100 text-blue-700 border-blue-200",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  high: "bg-red-100 text-red-700 border-red-200",
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`group p-4 rounded-xl border bg-card hover:shadow-md transition-all ${
        todo.completed ? "opacity-60" : ""
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
                    priorityColors[todo.priority]
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
