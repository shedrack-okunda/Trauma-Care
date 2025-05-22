// components/Logout.tsx
import React from "react";

interface Props {
  onLogout: () => void;
  userName?: string;
}

const Logout: React.FC<Props> = ({ onLogout, userName }) => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold">Welcome, {userName}</h2>
      <button
        onClick={onLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
