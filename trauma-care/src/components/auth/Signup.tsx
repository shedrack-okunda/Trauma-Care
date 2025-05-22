// components/SignupForm.tsx
import React from "react";

interface Props {
  registerForm: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  setRegisterForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    }>
  >;
  onRegister: (e: React.FormEvent) => void;
  switchToLogin: () => void;
}

const SignupForm: React.FC<Props> = ({
  registerForm,
  setRegisterForm,
  onRegister,
  switchToLogin,
}) => {
  return (
    <form onSubmit={onRegister}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          value={registerForm.name}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, name: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={registerForm.email}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, email: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={registerForm.password}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, password: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Create a password"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          value={registerForm.confirmPassword}
          onChange={(e) =>
            setRegisterForm({
              ...registerForm,
              confirmPassword: e.target.value,
            })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Confirm your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
      >
        Sign Up
      </button>
      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <button
          type="button"
          onClick={switchToLogin}
          className="text-teal-600 hover:underline"
        >
          Log In
        </button>
      </p>
    </form>
  );
};

export default SignupForm;
