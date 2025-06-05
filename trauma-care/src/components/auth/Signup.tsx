// components/SignupForm.tsx
import React from "react";

interface Props {
  registerForm: {
    name: string;
    username: string;
    email: string;
    phone: string;
    age: number;
    gender: "male" | "female";
    password: string;
    confirmPassword: string;
  };

  setRegisterForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      username: string;
      email: string;
      phone: string;
      age: number;
      gender: "male" | "female";
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
          Username
        </label>
        <input
          type="text"
          value={registerForm.username}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, username: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your username"
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
          Phone
        </label>
        <input
          type="text"
          value={registerForm.phone}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, phone: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input
          type="number"
          value={registerForm.age}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, age: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your age"
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
