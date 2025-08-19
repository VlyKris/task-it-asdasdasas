import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

interface TodoFormProps {
  todo?: Doc<"todos">;
  onSuccess?: () => void;
}

export function TodoForm({ todo, onSuccess }: TodoFormProps) {
  const createTodo = useMutation(api.todos.createTodo);
  const updateTodo = useMutation(api.todos.updateTodo);
  
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");
  const [priority, setPriority] = useState<"low" | "medium" | "high">(todo?.priority || "medium");
  const [dueDate, setDueDate] = useState(
    todo?.dueDate ? new Date(todo.dueDate).toISOString().split("T")[0] : ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsLoading(true);
    try {
      const dueDateTimestamp = dueDate ? new Date(dueDate).getTime() : undefined;
      
      if (todo) {
        await updateTodo({
          id: todo._id,
          title: title.trim(),
          description: description.trim() || undefined,
          priority,
          dueDate: dueDateTimestamp,
        });
        toast.success("Todo updated successfully!");
      } else {
        await createTodo({
          title: title.trim(),
          description: description.trim() || undefined,
          priority,
          dueDate: dueDateTimestamp,
        });
        toast.success("Todo created successfully!");
        setTitle("");
        setDescription("");
        setPriority("medium");
        setDueDate("");
      }
      
      onSuccess?.();
    } catch (error) {
      toast.error(todo ? "Failed to update todo" : "Failed to create todo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add more details..."
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Select value={priority} onValueChange={(value: "low" | "medium" | "high") => setPriority(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="submit" disabled={!title.trim() || isLoading}>
          {isLoading ? "Saving..." : todo ? "Update Todo" : "Create Todo"}
        </Button>
      </div>
    </form>
  );
}
