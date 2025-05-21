import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Avatar,
  Stack,
  Fade,
} from "@mui/material";
import WindPowerIcon from "@mui/icons-material/WindPower";

export const Breathing = () => {
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState("inhale");

  const startBreathingExercise = () => {
    setShowBreathingExercise(true);

    let phase = "inhale";
    const breathingInterval = setInterval(() => {
      if (phase === "inhale") {
        setBreathingPhase("hold");
        phase = "hold";
      } else if (phase === "hold") {
        setBreathingPhase("exhale");
        phase = "exhale";
      } else {
        setBreathingPhase("inhale");
        phase = "inhale";
      }
    }, 4000);

    setTimeout(() => {
      clearInterval(breathingInterval);
      setShowBreathingExercise(false);
    }, 60000);
  };

  const getPhaseStyles = (phase) => {
    switch (phase) {
      case "inhale":
        return {
          backgroundColor: "#DBEAFE", // blue-100
          transform: "scale(1.25)",
        };
      case "hold":
        return {
          backgroundColor: "#CCFBF1", // teal-100
          transform: "scale(1.25)",
        };
      case "exhale":
        return {
          backgroundColor: "#E9D5FF", // purple-100
          transform: "scale(1.0)",
        };
      default:
        return {};
    }
  };

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Avatar sx={{ bgcolor: "#DBEAFE", color: "#2563EB" }}>
          <WindPowerIcon />
        </Avatar>
        <Typography variant="h6">Breathing Exercise</Typography>
      </Stack>

      {showBreathingExercise ? (
        <Box display="flex" flexDirection="column" alignItems="center" py={2}>
          <Fade in timeout={1000}>
            <Box
              sx={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 1s ease-in-out",
                ...getPhaseStyles(breathingPhase),
              }}
            >
              <Typography variant="subtitle1" color="text.secondary">
                {breathingPhase === "inhale"
                  ? "Inhale"
                  : breathingPhase === "hold"
                  ? "Hold"
                  : "Exhale"}
              </Typography>
            </Box>
          </Fade>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Focus on your breath for 60 seconds
          </Typography>
        </Box>
      ) : (
        <Box textAlign="center" py={2}>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Take a moment to breathe and center yourself
          </Typography>
          <Button
            onClick={startBreathingExercise}
            variant="contained"
            sx={{
              backgroundColor: "#DBEAFE",
              color: "#2563EB",
              textTransform: "none",
              borderRadius: "0.75rem", // equivalent to rounded-button
              "&:hover": {
                backgroundColor: "#BFDBFE",
              },
            }}
          >
            Start Breathing Exercise
          </Button>
        </Box>
      )}
    </Paper>
  );
};
