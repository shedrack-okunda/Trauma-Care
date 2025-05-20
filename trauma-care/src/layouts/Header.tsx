export const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="fixed w-full top-0 bg-white shadow-sm z-50 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-2">
            <i className="fas fa-seedling text-teal-600"></i>
          </div>
          <h1 className="font-medium text-teal-700">TraumaCare</h1>
        </div>
        <div className="flex items-center">
          <button className="mr-3 text-gray-500 cursor-pointer">
            <i className="fas fa-search"></i>
          </button>
          <button className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium cursor-pointer !rounded-button">
            Safe Exit <i className="fas fa-sign-out-alt ml-1"></i>
          </button>
        </div>
      </header>
    </>
  );
};
