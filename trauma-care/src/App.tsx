import React from "react";
import { Mentor } from "./features/mentor/ProfessionalList";
import { Header } from "./layouts/Header";
import { MainLayout } from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <div className={`min-h-screen bg-blue-50 text-gray-700`}>
      <Header />

      <MainLayout />

      <Mentor />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
export default App;
