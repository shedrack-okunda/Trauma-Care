import { Accessibility } from "../components/accessibility/AccessibilityControls";
import { Affirmations } from "../features/affirmations/DailyAffirmation";
import { Checkups } from "../features/appointments/UpcomingCheckups";
import { Journal } from "../features/journals/QuickAccess";
import { Progress } from "../features/progress/ProgressTracker";
import { Breathing } from "../features/relaxation/BreathingExercise";
import { FeaturedCategories } from "../features/resources/FeaturedResources";
import { ResourceCategories } from "../features/resources/ResourceCategories";
import { MoodSymptoms } from "../features/tracking/MoodSymptomsTracker";

export const MainLayout = () => {
  return (
    <>
      {/* Main Content */}
      <main className="pt-16 pb-20 px-4">
        {/* Welcome Message */}
        <div className="mt-4 mb-6">
          <h2 className="text-xl font-medium text-teal-800">
            Welcome back, Sheddy
          </h2>
          <p className="text-gray-600 mt-1">
            Tuesday, May 20, 2025 • Your journey continues
          </p>
        </div>

        {/* Crisis Help Button - Always Visible */}
        <div className="mb-6">
          <button className="w-full bg-purple-100 text-purple-800 py-2.5 rounded-lg shadow-sm flex items-center justify-center cursor-pointer !rounded-button">
            <i className="fas fa-phone-alt mr-2"></i>
            24/7 Crisis Support
          </button>
        </div>

        <MoodSymptoms />

        <Affirmations />

        <Breathing />

        <Progress />

        <ResourceCategories />

        <FeaturedCategories />

        <Checkups />

        <Journal />

        <Accessibility />
      </main>
    </>
  );
};
