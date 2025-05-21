import React from "react";
import { Box, Typography, Paper, Button, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";

export const Checkups: React.FC = () => {
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
            backgroundColor: "#CCFBF1", // teal-100
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
          }}
        >
          <CalendarTodayIcon sx={{ color: "#0F766E" }} /> {/* teal-600 */}
        </Box>
        <Typography fontWeight={500}>Upcoming Check-ups</Typography>
      </Box>

      {/* Checkup Entries */}
      <Stack spacing={1.5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1.5}
          sx={{ backgroundColor: "#F9FAFB", borderRadius: 2 }} // gray-50
        >
          <Box>
            <Typography fontWeight={500}>Therapy Session</Typography>
            <Typography variant="body2" color="text.secondary">
              Dr. Sarah Johnson
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography
              variant="body2"
              fontWeight={500}
              sx={{ color: "#0F766E" }} // teal-700
            >
              Tomorrow
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2:00 PM
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1.5}
          sx={{ backgroundColor: "#F9FAFB", borderRadius: 2 }} // gray-50
        >
          <Box>
            <Typography fontWeight={500}>Group Support</Typography>
            <Typography variant="body2" color="text.secondary">
              Trauma Recovery Group
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography
              variant="body2"
              fontWeight={500}
              sx={{ color: "#0F766E" }} // teal-700
            >
              May 25
            </Typography>
            <Typography variant="body2" color="text.secondary">
              6:30 PM
            </Typography>
          </Box>
        </Box>
      </Stack>

      {/* Schedule Button */}
      <Button
        fullWidth
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          mt: 2,
          backgroundColor: "#CCFBF1", // teal-50
          color: "#0F766E", // teal-700
          textTransform: "none",
          borderRadius: 2,
          py: 1.2,
          fontSize: "0.875rem",
          "&:hover": {
            backgroundColor: "#99F6E4", // hover shade
          },
        }}
      >
        Schedule Check-up
      </Button>
    </Paper>
  );
};
