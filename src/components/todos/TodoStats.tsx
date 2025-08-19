import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { CheckCircle, Circle, Clock, AlertCircle } from "lucide-react";

export function TodoStats() {
  const todos = useQuery(api.todos.getTodos);
  
  if (!todos) return null;

  const completed = todos.filter(todo => todo.completed).length;
  const pending = todos.filter(todo => !todo.completed).length;
  const highPriority = todos.filter(todo => todo.priority === "high" && !todo.completed).length;
  const overdue = todos.filter(todo => 
    todo.dueDate && 
    !todo.completed && 
    new Date(todo.dueDate) < new Date()
  ).length;

  const stats = [
    {
      label: "Completed",
      value: completed,
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      color: "text-green-600"
    },
    {
      label: "Pending",
      value: pending,
      icon: <Circle className="w-5 h-5 text-blue-600" />,
      color: "text-blue-600"
    },
    {
      label: "High Priority",
      value: highPriority,
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      color: "text-red-600"
    },
    {
      label: "Overdue",
      value: overdue,
      icon: <Clock className="w-5 h-5 text-orange-600" />,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-card border rounded-xl p-4">
          <div className="flex items-center space-x-3">
            {stat.icon}
            <div>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
