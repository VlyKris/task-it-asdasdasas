import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Plus, Star, Zap, Heart, Skull, Moon, Sparkles, Zap as Lightning } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-pink-900/30 relative overflow-hidden">
      {/* CRAZY Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse animate-spin"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse animate-spin delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-red-500/25 rounded-full blur-3xl animate-pulse animate-bounce delay-300"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg rotate-45 animate-spin duration-10000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-3/4 right-1/6 w-40 h-40 bg-gradient-to-r from-yellow-500 to-orange-600 transform rotate-12 animate-pulse delay-1500"></div>
      </div>

      {/* GLITCH EFFECT OVERLAY */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse delay-1500"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10"
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/50"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Skull className="w-7 h-7 text-white" />
          </motion.div>
          <motion.span 
            className="text-3xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_200%]"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            TodoFlow
          </motion.span>
        </motion.div>
        <AuthButton 
          trigger={
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-600 hover:from-pink-600 hover:via-purple-700 hover:to-cyan-700 border-0 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 animate-pulse">
                Get Started Free
              </Button>
            </motion.div>
          }
          dashboardTrigger={
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-pink-500/50 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400 transition-all duration-300">
                Open App
              </Button>
            </motion.div>
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
          <motion.h1 
            className="text-6xl md:text-7xl font-black tracking-tight mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(236, 72, 153, 0.8)",
                "0 0 40px rgba(168, 85, 247, 0.8)",
                "0 0 20px rgba(236, 72, 153, 0.8)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse">
              Organize Your Life
            </span>
            <span className="block text-white mt-2 animate-bounce">Effortlessly</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            animate={{ 
              color: ["#f3f4f6", "#ec4899", "#a855f7", "#06b6d4", "#f3f4f6"]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            The <span className="text-pink-400 font-semibold animate-pulse">dark</span> todo app that adapts to your <span className="text-purple-400 font-semibold animate-pulse">emo soul</span>. 
            Simple, powerful, and beautifully designed to help you get things done in <span className="text-cyan-400 font-semibold animate-pulse">STYLE</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <AuthButton 
              trigger={
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(236, 72, 153, 0.8)",
                      "0 0 40px rgba(168, 85, 247, 0.8)",
                      "0 0 20px rgba(236, 72, 153, 0.8)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Button size="lg" className="text-lg px-12 py-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-500 to-pink-500 hover:from-pink-600 hover:via-purple-600 hover:via-cyan-600 hover:to-pink-600 border-0 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 transform hover:scale-105 animate-pulse">
                    <Plus className="w-5 h-5 mr-2 animate-spin" />
                    Start Creating
                  </Button>
                </motion.div>
              }
            />
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="lg" className="text-lg px-8 py-6 rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition-all duration-300 animate-bounce">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 relative"
        >
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-8 shadow-2xl shadow-pink-500/20 max-w-4xl mx-auto"
            animate={{ 
              borderColor: ["rgba(236, 72, 153, 0.3)", "rgba(168, 85, 247, 0.3)", "rgba(6, 182, 212, 0.3)", "rgba(236, 72, 153, 0.3)"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl border border-pink-500/30"
                whileHover={{ scale: 1.02, rotate: 1 }}
                animate={{ 
                  backgroundColor: ["rgba(236, 72, 153, 0.2)", "rgba(168, 85, 247, 0.2)", "rgba(236, 72, 153, 0.2)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-5 h-5 rounded-full border-2 border-pink-400"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    borderColor: ["#ec4899", "#a855f7", "#06b6d4", "#ec4899"]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <span className="flex-1 text-lg text-white">Design the new landing page</span>
                <motion.span 
                  className="text-sm bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30"
                  animate={{ 
                    backgroundColor: ["rgba(239, 68, 68, 0.2)", "rgba(220, 38, 38, 0.2)", "rgba(239, 68, 68, 0.2)"]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >High</motion.span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-500/30"
                whileHover={{ scale: 1.02, rotate: -1 }}
                animate={{ 
                  backgroundColor: ["rgba(168, 85, 247, 0.2)", "rgba(6, 182, 212, 0.2)", "rgba(168, 85, 247, 0.2)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className="flex-1 text-lg line-through text-gray-400">Review user feedback</span>
                <motion.span 
                  className="text-sm bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30"
                  animate={{ 
                    backgroundColor: ["rgba(34, 197, 94, 0.2)", "rgba(22, 163, 74, 0.2)", "rgba(34, 197, 94, 0.2)"]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >Medium</motion.span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl border border-cyan-500/30"
                whileHover={{ scale: 1.02, rotate: 1 }}
                animate={{ 
                  backgroundColor: ["rgba(6, 182, 212, 0.2)", "rgba(236, 72, 153, 0.2)", "rgba(6, 182, 212, 0.2)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-5 h-5 rounded-full border-2 border-cyan-400"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    borderColor: ["#06b6d4", "#ec4899", "#a855f7", "#06b6d4"]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <span className="flex-1 text-lg text-white">Update documentation</span>
                <motion.span 
                  className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                  animate={{ 
                    backgroundColor: ["rgba(59, 130, 246, 0.2)", "rgba(37, 99, 235, 0.2)", "rgba(59, 130, 246, 0.2)"]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >Low</motion.span>
              </motion.div>
            </div>
          </motion.div>
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
          <motion.h2 
            className="text-4xl font-black tracking-tight mb-4 bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_200%]"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Everything you need to stay productive
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            animate={{ 
              color: ["#d1d5db", "#ec4899", "#a855f7", "#06b6d4", "#d1d5db"]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Powerful features wrapped in a <span className="text-pink-400 animate-pulse">dark</span>, <span className="text-purple-400 animate-pulse">intuitive</span> interface
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightning className="w-8 h-8" />,
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
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 2 : -2,
                y: -10
              }}
              animate={{ 
                y: [0, -5, 0]
              }}
              transition={{ 
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }
              }}
            >
              <motion.div 
                className={`w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center mx-auto mb-6 ${feature.iconColor} backdrop-blur-sm`}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {feature.icon}
              </motion.div>
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
        <motion.div 
          className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl p-12 border border-pink-500/30 backdrop-blur-sm"
          animate={{ 
            borderColor: ["rgba(236, 72, 153, 0.3)", "rgba(168, 85, 247, 0.3)", "rgba(6, 182, 212, 0.3)", "rgba(236, 72, 153, 0.3)"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.h2 
            className="text-4xl font-black tracking-tight mb-6 bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_200%]"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to get organized?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            animate={{ 
              color: ["#d1d5db", "#ec4899", "#a855f7", "#06b6d4", "#d1d5db"]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Join thousands of users who have transformed their productivity with <span className="text-pink-400 font-semibold animate-pulse">TodoFlow</span>
          </motion.p>
          <AuthButton 
            trigger={
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(236, 72, 153, 0.8)",
                    "0 0 40px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(236, 72, 153, 0.8)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Button size="lg" className="text-lg px-12 py-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-500 to-pink-500 hover:from-pink-600 hover:via-purple-600 hover:via-cyan-600 hover:to-pink-600 border-0 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 transform hover:scale-105 animate-pulse">
                  <Plus className="w-5 h-5 mr-2 animate-spin" />
                  Get Started Now
                </Button>
              </motion.div>
            }
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-pink-500/20 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/50"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-white" />
              </motion.div>
              <span className="font-bold text-white">TodoFlow</span>
            </motion.div>
            <motion.p 
              className="text-sm text-gray-400"
              animate={{ 
                color: ["#9ca3af", "#ec4899", "#a855f7", "#06b6d4", "#9ca3af"]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              © 2024 TodoFlow. Built with <span className="text-pink-400 animate-pulse">❤️</span> for productivity.
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}