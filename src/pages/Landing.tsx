import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Plus, Star, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between p-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">TodoFlow</span>
        </div>
        <AuthButton 
          trigger={
            <Button size="lg" className="rounded-full px-8">
              Get Started Free
            </Button>
          }
          dashboardTrigger={
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Open App
            </Button>
          }
        />
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Organize Your Life
            <span className="block text-primary">Effortlessly</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            The modern todo app that adapts to your workflow. Simple, powerful, and beautifully designed to help you get things done.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <AuthButton 
              trigger={
                <Button size="lg" className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Plus className="w-5 h-5 mr-2" />
                  Start Creating
                </Button>
              }
            />
            <Button variant="ghost" size="lg" className="text-lg px-8 py-6 rounded-full">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 relative"
        >
          <div className="bg-card border rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-accent/30 rounded-xl">
                <div className="w-5 h-5 rounded-full border-2 border-primary"></div>
                <span className="flex-1 text-lg">Design the new landing page</span>
                <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">High</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-accent/20 rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="flex-1 text-lg line-through text-muted-foreground">Review user feedback</span>
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">Medium</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-accent/20 rounded-xl">
                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                <span className="flex-1 text-lg">Update documentation</span>
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Low</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Everything you need to stay productive
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features wrapped in a clean, intuitive interface
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast",
              description: "Add, edit, and organize tasks in seconds with our streamlined interface"
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Priority System",
              description: "Focus on what matters most with our intelligent priority management"
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Due Dates",
              description: "Never miss a deadline with smart reminders and date tracking"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card border hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <div className="bg-primary/5 rounded-3xl p-12 border">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready to get organized?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity with TodoFlow
          </p>
          <AuthButton 
            trigger={
              <Button size="lg" className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Plus className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            }
          />
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">TodoFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TodoFlow. Built with ❤️ for productivity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}