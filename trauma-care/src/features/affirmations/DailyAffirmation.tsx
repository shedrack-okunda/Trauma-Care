export const Affirmations = () => {
  // Daily affirmations array
  const affirmations = [
    "I am safe in this present moment.",
    "My feelings are valid, and I honor them.",
    "I am stronger than I know.",
    "Healing happens at my own pace.",
    "I deserve peace and comfort.",
    "Each day is a new opportunity for growth.",
    "I am worthy of compassion and understanding.",
  ];

  // Random affirmation
  const todayAffirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  return (
    <>
      {/* Daily Affirmation */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
            <i className="fas fa-sun text-yellow-600"></i>
          </div>
          <h3 className="font-medium">Today's Affirmation</h3>
        </div>
        <p className="text-gray-700 italic text-center py-3">
          {todayAffirmation}
        </p>
        <div className="flex justify-center mt-2">
          <button className="text-teal-600 text-sm cursor-pointer">
            <i className="fas fa-sync-alt mr-1"></i> New Affirmation
          </button>
        </div>
      </div>
    </>
  );
};
