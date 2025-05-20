import { useState } from "react";

export const ResourceCategories = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      {/* Resource Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Resources For You</h3>
        <div className="grid grid-cols-3 gap-3">
          <div
            onClick={() => handleTabChange("articles")}
            className="bg-white p-4 rounded-xl shadow-sm text-center cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <img
                src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20open%20book%20with%20healing%20pages%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=5&orientation=squarish"
                alt="Articles & Resources"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-sm font-medium">Articles</h4>
          </div>

          <div
            onClick={() => handleTabChange("meditations")}
            className="bg-white p-4 rounded-xl shadow-sm text-center cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-2">
              <img
                src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20peaceful%20meditation%20lotus%20position%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=6&orientation=squarish"
                alt="Guided Meditations"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-sm font-medium">Meditations</h4>
          </div>

          <div
            onClick={() => handleTabChange("videos")}
            className="bg-white p-4 rounded-xl shadow-sm text-center cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-rose-100 flex items-center justify-center mb-2">
              <img
                src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20video%20player%20with%20healing%20content%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=7&orientation=squarish"
                alt="Video Resources"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-sm font-medium">Videos</h4>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center cursor-pointer">
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <img
                src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20group%20of%20people%20in%20a%20circle%20supporting%20each%20other%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=2&orientation=squarish"
                alt="Support Groups"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-sm font-medium">Support Groups</h4>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center cursor-pointer">
            <div className="w-12 h-12 mx-auto rounded-full bg-teal-100 flex items-center justify-center mb-2">
              <img
                src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20professional%20therapist%20with%20clipboard%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=3&orientation=squarish"
                alt="Professional Help"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-sm font-medium">Professional Help</h4>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center cursor-pointer">
            <div className="w-12 h-12 mx-auto rounded-full bg-rose-100 flex items-center justify-center mb-2">
              <img
                src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20self%20care%20items%20like%20bath%2C%20candle%20and%20tea%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=4&orientation=squarish"
                alt="Self-Care Resources"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-sm font-medium">Self-Care</h4>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="fixed bottom-0 w-full bg-white shadow-lg border-t border-gray-100 px-2 py-2 grid grid-cols-5 z-50">
        <button
          onClick={() => handleTabChange("home")}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            selectedTab === "home" ? "text-teal-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-home text-lg"></i>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => handleTabChange("tools")}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            selectedTab === "tools" ? "text-teal-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-toolbox text-lg"></i>
          <span className="text-xs mt-1">Tools</span>
        </button>
        <button
          onClick={() => handleTabChange("journal")}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            selectedTab === "journal" ? "text-teal-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-book text-lg"></i>
          <span className="text-xs mt-1">Journal</span>
        </button>
        <button
          onClick={() => handleTabChange("community")}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            selectedTab === "community" ? "text-teal-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-users text-lg"></i>
          <span className="text-xs mt-1">Community</span>
        </button>
        <button
          onClick={() => handleTabChange("profile")}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            selectedTab === "profile" ? "text-teal-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-user text-lg"></i>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </>
  );
};
