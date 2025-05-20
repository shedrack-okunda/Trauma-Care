export const Progress = () => {
  // Progress data (simplified for demo)
  const progressData = {
    journalEntries: 12,
    daysActive: 28,
    exercisesCompleted: 15,
    resourcesExplored: 8,
  };

  return (
    <>
      {/* Progress Tracker */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
            <i className="fas fa-chart-line text-green-600"></i>
          </div>
          <h3 className="font-medium">Your Healing Journey</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xl font-medium text-teal-700">
              {progressData.journalEntries}
            </div>
            <div className="text-xs text-gray-500">Journal Entries</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xl font-medium text-teal-700">
              {progressData.daysActive}
            </div>
            <div className="text-xs text-gray-500">Days Active</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xl font-medium text-teal-700">
              {progressData.exercisesCompleted}
            </div>
            <div className="text-xs text-gray-500">Exercises Completed</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xl font-medium text-teal-700">
              {progressData.resourcesExplored}
            </div>
            <div className="text-xs text-gray-500">Resources Explored</div>
          </div>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            Remember, healing isn't linear. Every step counts.
          </p>
        </div>
      </div>
    </>
  );
};
