import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Plus, Star, Zap, Heart, Skull } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
        <div
          className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
        />
        <div
          className="absolute top-0 -right-4 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 -left-4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/80 to-black" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/50">
            <Skull className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            TodoFlow
          </span>
        </div>
        <AuthButton
          trigger={
            <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300">
              Get Started Free
            </Button>
          }
          dashboardTrigger={
            <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-pink-500/50 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400 transition-all duration-300">
              Open App
            </Button>
          }
        />
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Organize Your Life
            </span>
            <span className="block text-white mt-2">Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            The <span className="text-pink-400 font-semibold">dark</span> todo app that adapts to your <span className="text-purple-400 font-semibold">emo soul</span>.
            Simple, powerful, and beautifully designed to help you get things done in style.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <AuthButton
              trigger={
                <Button size="lg" className="text-lg px-12 py-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 border-0 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 transform hover:scale-105">
                  <Plus className="w-5 h-5 mr-2" />
                  Start Creating
                </Button>
              }
            />
            <Button variant="ghost" size="lg" className="text-lg px-8 py-6 rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition-all duration-300">
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
          <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-8 shadow-2xl shadow-pink-500/20 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl border border-pink-500/30">
                <div className="w-5 h-5 rounded-full border-2 border-pink-400 animate-pulse"></div>
                <span className="flex-1 text-lg text-white">Design the new landing page</span>
                <span className="text-sm bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">High</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-500/30">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span className="flex-1 text-lg line-through text-gray-400">Review user feedback</span>
                <span className="text-sm bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30">Medium</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl border border-cyan-500/30">
                <div className="w-5 h-5 rounded-full border-2 border-cyan-400 animate-pulse"></div>
                <span className="flex-1 text-lg text-white">Update documentation</span>
                <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">Low</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black tracking-tight mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Everything you need to stay productive
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful features wrapped in a <span className="text-pink-400">dark</span>, <span className="text-purple-400">intuitive</span> interface
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast",
              description: "Add, edit, and organize tasks in seconds with our streamlined interface",
              gradient: "from-pink-500/20 to-purple-500/20",
              border: "border-pink-500/30",
              iconColor: "text-pink-400"
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Priority System",
              description: "Focus on what matters most with our intelligent priority management",
              gradient: "from-purple-500/20 to-cyan-500/20",
              border: "border-purple-500/30",
              iconColor: "text-purple-400"
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Due Dates",
              description: "Never miss a deadline with smart reminders and date tracking",
              gradient: "from-cyan-500/20 to-pink-500/20",
              border: "border-cyan-500/30",
              iconColor: "text-cyan-400"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className={`text-center p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:scale-105`}
            >
              <div className={`w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center mx-auto mb-6 ${feature.iconColor} backdrop-blur-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10"
      >
        <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl p-12 border border-pink-500/30 backdrop-blur-sm">
          <h2 className="text-4xl font-black tracking-tight mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to get organized?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity with <span className="text-pink-400 font-semibold">TodoFlow</span>
          </p>
          <AuthButton
            trigger={
              <Button size="lg" className="text-lg px-12 py-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 border-0 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 transform hover:scale-105">
                <Plus className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            }
          />
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-pink-500/20 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/50">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">TodoFlow</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 TodoFlow. Built with <span className="text-pink-400">❤️</span> for productivity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}