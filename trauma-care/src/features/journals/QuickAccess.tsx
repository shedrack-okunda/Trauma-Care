export const Journal = () => {
  return (
    <>
      {/* Journal Quick Access */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
            <i className="fas fa-book text-amber-600"></i>
          </div>
          <h3 className="font-medium">Journal</h3>
          <div className="ml-auto">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              <i className="fas fa-lock text-xs mr-1"></i>Private
            </span>
          </div>
        </div>
        <div className="text-center py-2">
          <p className="text-gray-600 mb-3">
            Record your thoughts and feelings in a safe space
          </p>
          <button className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg cursor-pointer !rounded-button">
            <i className="fas fa-plus mr-2"></i>New Entry
          </button>
        </div>
      </div>
    </>
  );
};
