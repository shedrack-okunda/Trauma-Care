// components/Login.tsx
import React from "react";

interface Props {
  loginForm: { email: string; password: string };
  setLoginForm: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
  onLogin: (e: React.FormEvent) => void;
  switchToSignup: () => void;
}

const Login: React.FC<Props> = ({
  loginForm,
  setLoginForm,
  onLogin,
  switchToSignup,
}) => {
  return (
    <form onSubmit={onLogin}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm({ ...loginForm, email: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
      >
        Log In
      </button>
      <p className="text-center mt-4 text-sm">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={switchToSignup}
          className="text-teal-600 hover:underline"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default Login;
