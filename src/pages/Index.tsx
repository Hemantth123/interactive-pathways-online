
import { useState } from "react";
import { AnimatedLogin } from "@/components/AnimatedLogin";
import { AnimatedDashboard } from "@/components/AnimatedDashboard";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return isAuthenticated ? (
    <AnimatedDashboard onSignOut={handleSignOut} />
  ) : (
    <AnimatedLogin onLogin={handleLogin} />
  );
};

export default Index;
