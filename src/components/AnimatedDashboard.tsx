import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, Clock, Users, Star, Search, Bell, Award, 
  Play, CheckCircle, Calendar, MessageSquare, Video,
  TrendingUp, Target, Zap, Trophy, Gift
} from "lucide-react";

interface AnimatedDashboardProps {
  onSignOut: () => void;
}

export const AnimatedDashboard = ({ onSignOut }: AnimatedDashboardProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications] = useState(3);

  // Mock data with gamification elements
  const userStats = {
    level: 12,
    xp: 2847,
    nextLevelXp: 3000,
    streak: 7,
    badges: 15,
    certificates: 3
  };

  const featuredCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      description: "Master modern React patterns, hooks, and best practices for building scalable applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      duration: "12 weeks",
      students: 2847,
      rating: 4.8,
      price: "$199",
      category: "Development",
      progress: 0,
      difficulty: "Advanced",
      trending: true
    },
    {
      id: 2,
      title: "UI/UX Design Mastery",
      instructor: "Emma Rodriguez",
      description: "Create beautiful, user-centered designs using industry-standard tools and methodologies.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      duration: "10 weeks",
      students: 1943,
      rating: 4.7,
      price: "$179",
      category: "Design",
      progress: 0,
      difficulty: "Intermediate",
      new: true
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Dr. Michael Chen",
      description: "Learn Python, statistics, and machine learning to kickstart your data science career.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      duration: "16 weeks",
      students: 3521,
      rating: 4.9,
      price: "$249",
      category: "Data Science",
      progress: 0,
      difficulty: "Beginner",
      hot: true
    }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      progress: 65,
      nextLesson: "State Management with Redux",
      dueDate: "Dec 25, 2024",
      timeSpent: "12h 30m",
      streak: 5
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      progress: 30,
      nextLesson: "Social Media Analytics",
      dueDate: "Dec 30, 2024",
      timeSpent: "8h 15m",
      streak: 3
    }
  ];

  const achievements = [
    { icon: Trophy, title: "Course Completionist", desc: "Completed 5 courses", earned: true },
    { icon: Zap, title: "Speed Learner", desc: "Finished course in 2 weeks", earned: true },
    { icon: Target, title: "Perfect Score", desc: "Got 100% on 3 quizzes", earned: false },
    { icon: Gift, title: "Streak Master", desc: "7-day learning streak", earned: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  LearnHub Pro
                </span>
              </div>
              <nav className="hidden md:flex space-x-1">
                {["Dashboard", "Courses", "Progress", "Community"].map((item) => (
                  <Button 
                    key={item}
                    variant="ghost" 
                    className="font-medium hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    {item}
                  </Button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search courses..." 
                  className="pl-10 w-64 bg-white/50 border-white/30 focus:bg-white transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <Button size="icon" variant="ghost" className="hover:bg-purple-100 relative">
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                      {notifications}
                    </span>
                  )}
                </Button>
              </div>
              
              <Avatar className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40" alt="Profile" />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">JD</AvatarFallback>
              </Avatar>
              
              <Button 
                variant="outline" 
                onClick={onSignOut}
                className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300">
              Browse Courses
            </TabsTrigger>
            <TabsTrigger value="my-courses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300">
              My Courses
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Gamified Welcome Hero */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Welcome back, John! 🎉</h1>
                    <p className="text-purple-100 text-lg">You're on fire! Keep up the amazing progress.</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <div className="text-center">
                      <div className="text-3xl font-bold">LV.{userStats.level}</div>
                      <div className="text-sm text-purple-200">Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{userStats.streak}</div>
                      <div className="text-sm text-purple-200">Day Streak 🔥</div>
                    </div>
                  </div>
                </div>
                
                {/* XP Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Experience Points</span>
                    <span>{userStats.xp} / {userStats.nextLevelXp} XP</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: BookOpen, value: "12", label: "Courses", color: "from-blue-400 to-cyan-400" },
                    { icon: Award, value: userStats.badges, label: "Badges", color: "from-yellow-400 to-orange-400" },
                    { icon: CheckCircle, value: userStats.certificates, label: "Certificates", color: "from-green-400 to-emerald-400" },
                    { icon: Clock, value: "47h", label: "Hours", color: "from-purple-400 to-pink-400" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-purple-200">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Play className="w-8 h-8 mr-3 text-purple-600" />
                Continue Learning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                          <p className="text-gray-600 text-sm">by {course.instructor}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
                            {course.progress}%
                          </Badge>
                          {course.streak > 0 && (
                            <div className="flex items-center text-orange-500 text-sm">
                              🔥 {course.streak}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <Progress value={course.progress} className="mb-4 h-2" />
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Video className="w-4 h-4 mr-2" />
                          Next: {course.nextLesson}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          Time spent: {course.timeSpent}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          Due {course.dueDate}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200">
                        <Play className="w-4 h-4 mr-2" />
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
              <div className="flex space-x-2">
                {["All", "Development", "Design", "Business", "Data Science"].map((category) => (
                  <Badge 
                    key={category}
                    variant="outline" 
                    className="cursor-pointer hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Course badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {course.trending && (
                        <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white animate-pulse">
                          🔥 Trending
                        </Badge>
                      )}
                      {course.new && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          ✨ New
                        </Badge>
                      )}
                      {course.hot && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          🔥 Hot
                        </Badge>
                      )}
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">{course.price}</span>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-200"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Preview Course
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-2"
                      >
                        {course.category}
                      </Badge>
                      <Badge variant={course.difficulty === 'Beginner' ? 'default' : course.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                        {course.difficulty}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center hover:text-purple-600 transition-colors duration-200">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center hover:text-purple-600 transition-colors duration-200">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students.toLocaleString()}
                      </span>
                      <span className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {course.rating}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-courses" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">My Learning Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span className="font-semibold text-purple-600">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="text-sm space-y-1">
                        <p className="font-medium">Next Lesson:</p>
                        <p className="text-gray-600">{course.nextLesson}</p>
                        <p className="text-xs text-gray-500">Time spent: {course.timeSpent}</p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" variant="outline">
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Trophy className="w-8 h-8 mr-3 text-yellow-500" />
              Your Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    achievement.earned 
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white' 
                        : 'bg-gray-300 text-gray-500'
                    }`}>
                      <achievement.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.desc}</p>
                    {achievement.earned && (
                      <Badge className="mt-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        ✨ Earned
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
