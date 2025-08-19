import { AuthButton } from "@/components/auth/AuthButton";
import { UserButton } from "@/components/auth/UserButton";
import { TodoForm } from "@/components/todos/TodoForm";
import { TodoItem } from "@/components/todos/TodoItem";
import { TodoStats } from "@/components/todos/TodoStats";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { Protected } from "@/lib/protected-page";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { CheckCircle, Filter, Plus } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const { user } = useAuth();
  const todos = useQuery(api.todos.getTodos);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState<string>("all");

  const filteredTodos = todos?.filter(todo => {
    if (priorityFilter === "all") return true;
    return todo.priority === priorityFilter;
  }) || [];

  const pendingTodos = filteredTodos.filter(todo => !todo.completed);
  const completedTodos = filteredTodos.filter(todo => todo.completed);

  return (
    <Protected>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold tracking-tight">TodoFlow</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm text-muted-foreground">
                    Welcome back, {user?.name || user?.email}!
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="rounded-full">
                      <Plus className="w-4 h-4 mr-2" />
                      New Todo
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Todo</DialogTitle>
                    </DialogHeader>
                    <TodoForm onSuccess={() => setIsCreateOpen(false)} />
                  </DialogContent>
                </Dialog>
                
                <UserButton />
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TodoStats />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by priority:</span>
            </div>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Todo Lists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Tabs defaultValue="pending" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md">
                <TabsTrigger value="pending">
                  Pending ({pendingTodos.length})
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Completed ({completedTodos.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="mt-6">
                {pendingTodos.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">All caught up!</h3>
                    <p className="text-muted-foreground mb-4">
                      You don't have any pending todos. Create one to get started.
                    </p>
                    <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          Create Your First Todo
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create New Todo</DialogTitle>
                        </DialogHeader>
                        <TodoForm onSuccess={() => setIsCreateOpen(false)} />
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {pendingTodos.map((todo) => (
                      <TodoItem key={todo._id} todo={todo} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                {completedTodos.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No completed todos yet</h3>
                    <p className="text-muted-foreground">
                      Complete some todos to see them here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {completedTodos.map((todo) => (
                      <TodoItem key={todo._id} todo={todo} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </Protected>
  );
}