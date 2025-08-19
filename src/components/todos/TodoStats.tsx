import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { animate } from "framer-motion";
import { CheckCircle, Circle, Clock, AlertCircle } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({
  to,
  className,
}: {
  to: number;
  className: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [to]);

  return <p ref={ref} className={className} />;
}

export function TodoStats() {
  const todos = useQuery(api.todos.getTodos);

  if (!todos) return null;

  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.filter((todo) => !todo.completed).length;
  const highPriority = todos.filter(
    (todo) => todo.priority === "high" && !todo.completed,
  ).length;
  const overdue = todos.filter(
    (todo) =>
      todo.dueDate && !todo.completed && new Date(todo.dueDate) < new Date(),
  ).length;

  const stats = [
    {
      label: "Completed",
      value: completed,
      icon: <CheckCircle className="w-5 h-5" />,
      color: "text-chart-1",
      shadow: "hover:shadow-[0_0_20px_theme(colors.chart-1/50%)]",
    },
    {
      label: "Pending",
      value: pending,
      icon: <Circle className="w-5 h-5" />,
      color: "text-chart-2",
      shadow: "hover:shadow-[0_0_20px_theme(colors.chart-2/50%)]",
    },
    {
      label: "High Priority",
      value: highPriority,
      icon: <AlertCircle className="w-5 h-5" />,
      color: "text-destructive",
      shadow: "hover:shadow-[0_0_20px_theme(colors.destructive/50%)]",
    },
    {
      label: "Overdue",
      value: overdue,
      icon: <Clock className="w-5 h-5" />,
      color: "text-chart-4",
      shadow: "hover:shadow-[0_0_20px_theme(colors.chart-4/50%)]",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-card border rounded-xl p-4 transition-all duration-300 ${stat.shadow}`}
        >
          <div className="flex items-center space-x-3">
            <div className={stat.color}>{stat.icon}</div>
            <div>
              <Counter to={stat.value} className={`text-2xl font-bold ${stat.color}`} />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}