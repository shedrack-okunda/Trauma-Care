import React, { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import RefreshIcon from "@mui/icons-material/Refresh";

export const Affirmations: React.FC = () => {
  // Daily affirmations array
  const affirmations = [
    "I am safe in this present moment.",
    "My feelings are valid, and I honor them.",
    "I am stronger than I know.",
    "Healing happens at my own pace.",
    "I deserve peace and comfort.",
    "Each day is a new opportunity for growth.",
    "I am worthy of compassion and understanding.",
  ];

  // State to handle current affirmation
  const [affirmation, setAffirmation] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );

  const getNewAffirmation = () => {
    const newAffirmation =
      affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(newAffirmation);
  };

  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        p: 2.5,
        mb: 3,
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "#FEF9C3", // yellow-100
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
          }}
        >
          <WbSunnyIcon sx={{ color: "#CA8A04" }} /> {/* yellow-600 */}
        </Box>
        <Typography fontWeight={500}>Today's Affirmation</Typography>
      </Box>

      {/* Affirmation Text */}
      <Typography
        variant="body1"
        color="text.primary"
        fontStyle="italic"
        align="center"
        py={2}
      >
        {affirmation}
      </Typography>

      {/* Refresh Button */}
      <Box display="flex" justifyContent="center" mt={1}>
        <Button
          onClick={getNewAffirmation}
          size="small"
          startIcon={<RefreshIcon fontSize="small" />}
          sx={{
            color: "#0F766E", // teal-600
            textTransform: "none",
            fontSize: "0.875rem",
          }}
        >
          New Affirmation
        </Button>
      </Box>
    </Paper>
  );
};
