export const Checkups = () => {
  return (
    <>
      {/* Upcoming Check-ups */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-2">
            <i className="fas fa-calendar-check text-teal-600"></i>
          </div>
          <h3 className="font-medium">Upcoming Check-ups</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Therapy Session</h4>
              <p className="text-sm text-gray-600">Dr. Sarah Johnson</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-teal-700">Tomorrow</p>
              <p className="text-sm text-gray-600">2:00 PM</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Group Support</h4>
              <p className="text-sm text-gray-600">Trauma Recovery Group</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-teal-700">May 25</p>
              <p className="text-sm text-gray-600">6:30 PM</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-4 bg-teal-50 text-teal-700 py-2 rounded-lg cursor-pointer !rounded-button">
          <i className="fas fa-plus mr-2"></i>Schedule Check-up
        </button>
      </div>
    </>
  );
};
