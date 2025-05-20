export const FeaturedCategories = () => {
  return (
    <>
      {/* Featured Resources */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
              <i className="fas fa-star text-purple-600"></i>
            </div>
            <h3 className="font-medium">Featured Resources</h3>
          </div>
          <button className="text-sm text-teal-600">View All</button>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              Article
            </span>
            <h4 className="font-medium mt-2">Understanding Trauma Responses</h4>
            <p className="text-sm text-gray-600 mt-1">
              Learn about common trauma responses and how to manage them
              effectively.
            </p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <i className="fas fa-clock mr-1"></i>
              <span>10 min read</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
              Meditation
            </span>
            <h4 className="font-medium mt-2">Grounding Techniques</h4>
            <p className="text-sm text-gray-600 mt-1">
              A guided meditation to help you stay present and centered.
            </p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <i className="fas fa-headphones mr-1"></i>
              <span>15 min</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">
              Video
            </span>
            <h4 className="font-medium mt-2">Healing Through Movement</h4>
            <p className="text-sm text-gray-600 mt-1">
              Gentle exercises designed for trauma recovery.
            </p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <i className="fas fa-video mr-1"></i>
              <span>20 min</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
