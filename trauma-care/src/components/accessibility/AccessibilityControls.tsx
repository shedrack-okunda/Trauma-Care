import { useState } from "react";

export const Accessibility = () => {
  const [textSize, setTextSize] = useState("medium");

  const handleTextSizeChange = (size: string) => {
    setTextSize(size);
  };

  return (
    <div
      className={`${
        textSize === "large"
          ? "text-lg"
          : textSize === "small"
          ? "text-sm"
          : "text-base"
      }`}
    >
      {/* Accessibility Controls */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex items-center mb-2">
          <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center mr-2">
            <i className="fas fa-universal-access text-gray-600"></i>
          </div>
          <h3 className="text-sm font-medium">Accessibility</h3>
        </div>
        <div className="flex justify-around mt-2">
          <button
            onClick={() => handleTextSizeChange("small")}
            className={`px-3 py-1 rounded ${
              textSize === "small" ? "bg-teal-100 text-teal-700" : "bg-gray-100"
            } cursor-pointer !rounded-button`}
          >
            A<span className="text-xs">-</span>
          </button>
          <button
            onClick={() => handleTextSizeChange("medium")}
            className={`px-3 py-1 rounded ${
              textSize === "medium"
                ? "bg-teal-100 text-teal-700"
                : "bg-gray-100"
            } cursor-pointer !rounded-button`}
          >
            A
          </button>
          <button
            onClick={() => handleTextSizeChange("large")}
            className={`px-3 py-1 rounded ${
              textSize === "large" ? "bg-teal-100 text-teal-700" : "bg-gray-100"
            } cursor-pointer !rounded-button`}
          >
            A<span className="text-xs">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};
