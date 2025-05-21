import React from "react";
import { Box, Paper, Typography, Avatar, Grid, Stack } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export const Progress: React.FC = () => {
  const progressData = {
    journalEntries: 12,
    daysActive: 28,
    exercisesCompleted: 15,
    resourcesExplored: 8,
  };

  const metrics = [
    { label: "Journal Entries", value: progressData.journalEntries },
    { label: "Days Active", value: progressData.daysActive },
    { label: "Exercises Completed", value: progressData.exercisesCompleted },
    { label: "Resources Explored", value: progressData.resourcesExplored },
  ];

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 3, mb: 4 }}>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Avatar sx={{ bgcolor: "#DCFCE7", color: "#16A34A" }}>
          <ShowChartIcon />
        </Avatar>
        <Typography variant="h6" fontWeight="medium">
          Your Healing Journey
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {metrics.map((metric, index) => (
          <Grid size={{ xs: 6 }} key={index}>
            <Box
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#0F766E", fontWeight: 500 }}
              >
                {metric.value}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#6B7280", fontSize: "0.75rem" }}
              >
                {metric.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box mt={3} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Remember, healing isn't linear. Every step counts.
        </Typography>
      </Box>
    </Paper>
  );
};
