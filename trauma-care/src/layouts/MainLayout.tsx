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
import { Mentor } from "../features/mentor/ProfessionalList";
import { Header } from "./Header";
import TabBar from "./TabBar";

export const MainLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Header />

      <Box
        component="main"
        sx={{
          pt: 8,
          pb: 10,
          px: 2,
        }}
      >
        {/* Welcome Message */}
        <Box sx={{ mt: 5, mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 500, color: "#115E59" }}>
            Welcome back, Sheddy
          </Typography>
          <Typography sx={{ color: "#4B5563", mt: 0.5 }}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • Your journey continues.
          </Typography>
        </Box>

        {/* Crisis Help Button */}
        <Box sx={{ mb: 4 }}>
          <Button
            fullWidth
            startIcon={<PhoneIcon />}
            sx={{
              backgroundColor: "#E9D5FF",
              color: "#6B21A8",
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
          <Mentor />
        </Stack>
      </Box>

      <TabBar />
    </>
  );
};
