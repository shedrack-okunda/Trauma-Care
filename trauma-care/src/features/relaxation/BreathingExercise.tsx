import { useState } from "react";

export const Breathing = () => {
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState("inhale");

  const startBreathingExercise = () => {
    setShowBreathingExercise(true);

    // Start breathing cycle
    let phase = "inhale";
    const breathingInterval = setInterval(() => {
      if (phase === "inhale") {
        setBreathingPhase("hold");
        phase = "hold";
      } else if (phase === "hold") {
        setBreathingPhase("exhale");
        phase = "exhale";
      } else {
        setBreathingPhase("inhale");
        phase = "inhale";
      }
    }, 4000);

    // Cleanup after 1 minute
    setTimeout(() => {
      clearInterval(breathingInterval);
      setShowBreathingExercise(false);
    }, 60000);
  };

  return (
    <>
      {/* Breathing Exercise Widget */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <i className="fas fa-wind text-blue-600"></i>
          </div>
          <h3 className="font-medium">Breathing Exercise</h3>
        </div>
        {showBreathingExercise ? (
          <div className="flex flex-col items-center py-4">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
                breathingPhase === "inhale"
                  ? "bg-blue-100 scale-125"
                  : breathingPhase === "hold"
                  ? "bg-teal-100 scale-125"
                  : "bg-purple-100 scale-100"
              }`}
            >
              <span className="text-gray-700">
                {breathingPhase === "inhale"
                  ? "Inhale"
                  : breathingPhase === "hold"
                  ? "Hold"
                  : "Exhale"}
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Focus on your breath for 60 seconds
            </p>
          </div>
        ) : (
          <div className="text-center py-3">
            <p className="text-gray-600 mb-3">
              Take a moment to breathe and center yourself
            </p>
            <button
              onClick={startBreathingExercise}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg cursor-pointer !rounded-button"
            >
              Start Breathing Exercise
            </button>
          </div>
        )}
      </div>
    </>
  );
};
