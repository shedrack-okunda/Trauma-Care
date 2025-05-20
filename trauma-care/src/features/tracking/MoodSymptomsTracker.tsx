import { useState } from "react";

export const MoodSymptoms = () => {
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [showSymptomLogger, setShowSymptomLogger] = useState(false);
  const [selectedMood, setSelectedMood] = useState("");
  const [moodIntensity, setMoodIntensity] = useState(5);
  const [moodNote, setMoodNote] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [symptomNote, setSymptomNote] = useState("");

  const toggleMoodTracker = () => {
    setShowMoodTracker(!showMoodTracker);
    if (showSymptomLogger) setShowSymptomLogger(false);
  };

  const handleMoodSelection = (mood: string) => {
    setSelectedMood(mood);
  };

  const toggleSymptomLogger = () => {
    setShowSymptomLogger(!showSymptomLogger);
    if (showMoodTracker) setShowMoodTracker(false);
  };

  const saveMoodEntry = () => {
    // Here you would typically save to a database
    console.log("Saving mood:", {
      mood: selectedMood,
      intensity: moodIntensity,
      note: moodNote,
    });

    // Reset form
    setSelectedMood("");
    setMoodIntensity(5);
    setMoodNote("");
    setShowMoodTracker(false);
    // Show success message
    alert("Mood logged successfully!");
  };

  const handleSymptomSelection = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const saveSymptomEntry = () => {
    // Here you would typically save to a database
    console.log("Saving symptoms:", {
      symptoms: selectedSymptoms,
      note: symptomNote,
    });

    // Reset form
    setSelectedSymptoms([]);
    setSymptomNote("");
    setShowSymptomLogger(false);
    // Show success message
    alert("Symptoms logged successfully!");
  };

  // Mood options
  const moodOptions = [
    { name: "Happy", icon: "fa-smile", color: "bg-yellow-100 text-yellow-600" },
    { name: "Calm", icon: "fa-peace", color: "bg-blue-100 text-blue-600" },
    { name: "Sad", icon: "fa-frown", color: "bg-indigo-100 text-indigo-600" },
    {
      name: "Anxious",
      icon: "fa-bolt",
      color: "bg-purple-100 text-purple-600",
    },
    { name: "Angry", icon: "fa-angry", color: "bg-red-100 text-red-600" },
    { name: "Numb", icon: "fa-meh-blank", color: "bg-gray-100 text-gray-600" },
    {
      name: "Hopeful",
      icon: "fa-seedling",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Overwhelmed",
      icon: "fa-water",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  // Symptom options
  const symptomOptions = [
    { name: "Insomnia", icon: "fa-moon" },
    { name: "Fatigue", icon: "fa-battery-quarter" },
    { name: "Headache", icon: "fa-head-side-virus" },
    { name: "Nausea", icon: "fa-dizzy" },
    { name: "Muscle Tension", icon: "fa-dumbbell" },
    { name: "Racing Thoughts", icon: "fa-brain" },
    { name: "Appetite Changes", icon: "fa-utensils" },
    { name: "Panic Attacks", icon: "fa-heartbeat" },
    { name: "Flashbacks", icon: "fa-history" },
    { name: "Dissociation", icon: "fa-ghost" },
  ];

  return (
    <>
      {/* Mood & Symptom Tracking Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={toggleMoodTracker}
          className="bg-gradient-to-r from-blue-100 to-teal-100 text-teal-700 py-2.5 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer !rounded-button"
        >
          <i className="fas fa-smile-beam text-lg mb-1"></i>
          <span className="text-sm">Track Mood</span>
        </button>
        <button
          onClick={toggleSymptomLogger}
          className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 py-2.5 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer !rounded-button"
        >
          <i className="fas fa-clipboard-list text-lg mb-1"></i>
          <span className="text-sm">Log Symptoms</span>
        </button>
      </div>

      {/* Mood Tracker Form */}
      {showMoodTracker && (
        <div className="bg-white rounded-xl p-5 shadow-sm mb-6 animate-fadeIn">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-2">
              <i className="fas fa-chart-line text-teal-600"></i>
            </div>
            <h3 className="font-medium">How are you feeling?</h3>
            <button
              onClick={toggleMoodTracker}
              className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {moodOptions.map((mood) => (
              <div
                key={mood.name}
                onClick={() => handleMoodSelection(mood.name)}
                className={`p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                  selectedMood === mood.name
                    ? `${mood.color} ring-2 ring-offset-2 ring-teal-300`
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <i
                  className={`fas ${mood.icon} text-lg mb-1 ${
                    selectedMood === mood.name ? "" : "text-gray-500"
                  }`}
                ></i>
                <span className="text-xs">{mood.name}</span>
              </div>
            ))}
          </div>
          {selectedMood && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Intensity (1-10)
                </label>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">Mild</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={moodIntensity}
                    onChange={(e) => setMoodIntensity(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-gray-500 ml-2">Severe</span>
                </div>
                <div className="text-center mt-1">
                  <span className="text-sm font-medium">{moodIntensity}</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (optional)
                </label>
                <textarea
                  value={moodNote}
                  onChange={(e) => setMoodNote(e.target.value)}
                  placeholder="What might be contributing to this feeling?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows={3}
                ></textarea>
              </div>
              <button
                onClick={saveMoodEntry}
                className="w-full bg-teal-600 text-white py-2 rounded-lg shadow-sm hover:bg-teal-700 transition-colors cursor-pointer !rounded-button"
              >
                Save Mood Entry
              </button>
            </>
          )}
        </div>
      )}

      {/* Symptom Logger Form */}
      {showSymptomLogger && (
        <div className="bg-white rounded-xl p-5 shadow-sm mb-6 animate-fadeIn">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
              <i className="fas fa-clipboard-list text-purple-600"></i>
            </div>
            <h3 className="font-medium">Log Your Symptoms</h3>
            <button
              onClick={toggleSymptomLogger}
              className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Select all that apply today:
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {symptomOptions.map((symptom) => (
              <div
                key={symptom.name}
                onClick={() => handleSymptomSelection(symptom.name)}
                className={`p-3 rounded-lg flex items-center cursor-pointer transition-all ${
                  selectedSymptoms.includes(symptom.name)
                    ? "bg-purple-100 text-purple-700 ring-2 ring-offset-1 ring-purple-300"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <i className={`fas ${symptom.icon} mr-2`}></i>
                <span className="text-sm">{symptom.name}</span>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes (optional)
            </label>
            <textarea
              value={symptomNote}
              onChange={(e) => setSymptomNote(e.target.value)}
              placeholder="Any details about your symptoms..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={3}
            ></textarea>
          </div>
          <button
            onClick={saveSymptomEntry}
            disabled={selectedSymptoms.length === 0}
            className={`w-full py-2 rounded-lg shadow-sm transition-colors cursor-pointer !rounded-button ${
              selectedSymptoms.length === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Save Symptom Log
          </button>
        </div>
      )}
    </>
  );
};
