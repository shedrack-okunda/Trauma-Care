export const Mentor = () => {
  return (
    <>
      {/* Professional Connections */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <i className="fas fa-user-md text-blue-600"></i>
          </div>
          <h3 className="font-medium">Professional Support</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20therapist%20with%20warm%20smile%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20clean%20professional%20background%2C%20natural%20lighting%2C%20friendly%20and%20approachable%2C%20high%20quality%20professional%20photo&width=48&height=48&seq=8&orientation=squarish"
              alt="Dr. Sarah Johnson"
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <h4 className="font-medium">Dr. Sarah Johnson</h4>
              <p className="text-sm text-gray-600">Trauma Specialist</p>
            </div>
            <button className="ml-auto bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer !rounded-button">
              Message
            </button>
          </div>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20therapist%20with%20kind%20expression%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20clean%20professional%20background%2C%20natural%20lighting%2C%20friendly%20and%20approachable%2C%20high%20quality%20professional%20photo&width=48&height=48&seq=9&orientation=squarish"
              alt="Dr. Michael Chen"
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <h4 className="font-medium">Dr. Michael Chen</h4>
              <p className="text-sm text-gray-600">EMDR Therapist</p>
            </div>
            <button className="ml-auto bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer !rounded-button">
              Message
            </button>
          </div>
        </div>

        <button className="w-full mt-4 bg-blue-50 text-blue-700 py-2 rounded-lg cursor-pointer !rounded-button">
          <i className="fas fa-search mr-2"></i>Find More Professionals
        </button>
      </div>{" "}
    </>
  );
};
