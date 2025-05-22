// pages/AuthPage.tsx
import React, { useEffect, useState } from "react";
import SignupForm from "../components/auth/Signup";
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";

interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  joinDate: string;
  lastLogin: string;
}

const AuthPage: React.FC = () => {
  const [auth, setAuth] = useState<{
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
  }>({
    isAuthenticated: false,
    user: null,
    loading: true,
  });

  const [showLogin, setShowLogin] = useState(true);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setAuth({
        isAuthenticated: true,
        user: JSON.parse(user),
        loading: false,
      });
    } else {
      setAuth({ ...auth, loading: false });
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser: User = {
      id: "1",
      name: "Emily Johnson",
      email: loginForm.email,
      profileImage: "",
      joinDate: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };
    localStorage.setItem("user", JSON.stringify(mockUser));
    setAuth({ isAuthenticated: true, user: mockUser, loading: false });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const mockUser: User = {
      id: "1",
      name: registerForm.name,
      email: registerForm.email,
      profileImage: "",
      joinDate: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };
    localStorage.setItem("user", JSON.stringify(mockUser));
    setAuth({ isAuthenticated: true, user: mockUser, loading: false });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth({ isAuthenticated: false, user: null, loading: false });
    setShowLogin(true);
  };

  if (auth.loading) return <p>Loading...</p>;

  if (auth.isAuthenticated) {
    return <Logout onLogout={handleLogout} userName={auth.user?.name} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        {showLogin ? (
          <Login
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            onLogin={handleLogin}
            switchToSignup={() => setShowLogin(false)}
          />
        ) : (
          <SignupForm
            registerForm={registerForm}
            setRegisterForm={setRegisterForm}
            onRegister={handleRegister}
            switchToLogin={() => setShowLogin(true)}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
