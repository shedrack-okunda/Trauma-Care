import React from "react";
import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

import { Accessibility } from "../components/accessibility/AccessibilityControls";
import { Affirmations } from "../features/affirmations/DailyAffirmation";
import { Checkups } from "../features/appointments/UpcomingCheckups";
import { Journal } from "../features/journals/QuickAccess";
import { Progress } from "../features/progress/ProgressTracker";
import { Breathing } from "../features/relaxation/BreathingExercise";
import { FeaturedCategories } from "../features/resources/FeaturedResources";
import { ResourceCategories } from "../features/resources/ResourceCategories";
import { MoodSymptoms } from "../features/tracking/MoodSymptomsTracker";

export const MainLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        pt: 8, // equivalent to pt-16 (16 x 0.25rem = 4rem)
        pb: 10, // equivalent to pb-20
        px: 2, // equivalent to px-4
      }}
    >
      {/* Welcome Message */}
      <Box sx={{ mt: 2, mb: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 500, color: "#115E59" }} // Tailwind's text-teal-800
        >
          Welcome back, Sheddy
        </Typography>
        <Typography sx={{ color: "#4B5563", mt: 0.5 }}>
          {" "}
          {/* text-gray-600 */}
          Tuesday, May 20, 2025 • Your journey continues
        </Typography>
      </Box>

      {/* Crisis Help Button */}
      <Box sx={{ mb: 4 }}>
        <Button
          fullWidth
          startIcon={<PhoneIcon />}
          sx={{
            backgroundColor: "#E9D5FF", // Tailwind bg-purple-100
            color: "#6B21A8", // text-purple-800
            py: 1.5,
            borderRadius: 2,
            boxShadow: theme.shadows[1],
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#D8B4FE",
            },
          }}
        >
          24/7 Crisis Support
        </Button>
      </Box>

      {/* Main Features */}
      <Stack spacing={4}>
        <MoodSymptoms />
        <Affirmations />
        <Breathing />
        <Progress />
        <ResourceCategories />
        <FeaturedCategories />
        <Checkups />
        <Journal />
        <Accessibility />
      </Stack>
    </Box>
  );
};
