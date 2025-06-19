
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Clock, Users, Star, Search, Play, CheckCircle, Calendar, MessageSquare, Video } from "lucide-react";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'instructor' | 'admin'>('student');
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for courses
  const featuredCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      description: "Master modern React patterns, hooks, and best practices for building scalable applications.",
      image: "/placeholder.svg",
      duration: "12 weeks",
      students: 2847,
      rating: 4.8,
      price: "$199",
      category: "Development",
      progress: 0,
      isEnrolled: false
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Dr. Michael Chen",
      description: "Learn Python, statistics, and machine learning to kickstart your data science career.",
      image: "/placeholder.svg",
      duration: "16 weeks",
      students: 3521,
      rating: 4.9,
      price: "$249",
      category: "Data Science",
      progress: 0,
      isEnrolled: false
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      description: "Create beautiful, user-centered designs using industry-standard tools and methodologies.",
      image: "/placeholder.svg",
      duration: "10 weeks",
      students: 1943,
      rating: 4.7,
      price: "$179",
      category: "Design",
      progress: 0,
      isEnrolled: false
    }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      progress: 65,
      nextLesson: "State Management with Redux",
      dueDate: "Dec 25, 2024"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      progress: 30,
      nextLesson: "Social Media Analytics",
      dueDate: "Dec 30, 2024"
    }
  ];

  const LoginForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to LearnHub</CardTitle>
          <CardDescription>Sign in to access your courses and continue learning</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700" 
            onClick={() => setIsAuthenticated(true)}
          >
            Sign In
          </Button>
          <div className="text-center">
            <Button variant="link" className="text-sm">
              Don't have an account? Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const MainDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">LearnHub</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Button variant="ghost" className="font-medium">Dashboard</Button>
                <Button variant="ghost" className="font-medium">Courses</Button>
                <Button variant="ghost" className="font-medium">Progress</Button>
                <Button variant="ghost" className="font-medium">Community</Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search courses..." 
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button 
                variant="outline" 
                onClick={() => setIsAuthenticated(false)}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="courses">Browse Courses</TabsTrigger>
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-blue-100 mb-6">Continue your learning journey. You're doing great!</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-8 h-8" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-blue-100">Courses Enrolled</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8" />
                    <div>
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-sm text-blue-100">Courses Completed</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8" />
                    <div>
                      <p className="text-2xl font-bold">47h</p>
                      <p className="text-sm text-blue-100">Hours Learned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                          <p className="text-gray-600 text-sm">by {course.instructor}</p>
                        </div>
                        <Badge variant="secondary">{course.progress}%</Badge>
                      </div>
                      <Progress value={course.progress} className="mb-4" />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Next: {course.nextLesson}</p>
                          <p className="text-xs text-gray-500 flex items-center mt-1">
                            <Calendar className="w-3 h-3 mr-1" />
                            Due {course.dueDate}
                          </p>
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-1" />
                          Continue
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
              <div className="flex space-x-2">
                <Badge variant="outline">All</Badge>
                <Badge variant="outline">Development</Badge>
                <Badge variant="outline">Design</Badge>
                <Badge variant="outline">Business</Badge>
                <Badge variant="outline">Data Science</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Button 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        variant="secondary"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                      <span className="text-lg font-bold text-blue-600">{course.price}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-courses" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Next Lesson:</p>
                        <p className="text-gray-600">{course.nextLesson}</p>
                      </div>
                      <Button className="w-full" variant="outline">
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Learning Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-gray-600">Courses Enrolled</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">47</p>
                  <p className="text-sm text-gray-600">Hours Learned</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-sm text-gray-600">Avg. Rating</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Completed lesson", course: "Advanced React Development", time: "2 hours ago" },
                    { action: "Started quiz", course: "Data Science Fundamentals", time: "1 day ago" },
                    { action: "Earned certificate", course: "UI/UX Design Basics", time: "3 days ago" },
                    { action: "Joined discussion", course: "Digital Marketing Strategy", time: "1 week ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.course}</p>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  return isAuthenticated ? <MainDashboard /> : <LoginForm />;
};

export default Index;
