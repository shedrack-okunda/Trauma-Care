import React from "react";
import { Box, Typography, Avatar, Button, Paper, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Message } from "@mui/icons-material";

export const Mentor: React.FC = () => {
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
            backgroundColor: "#DBEAFE", // Tailwind's blue-100
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
          }}
        >
          <PersonIcon sx={{ color: "#2563EB" }} /> {/* Tailwind's blue-600 */}
        </Box>
        <Typography fontWeight={500}>Professional Support</Typography>
      </Box>

      {/* Mentors List */}
      <Stack spacing={2}>
        {/* Mentor 1 */}
        <Box
          display="flex"
          alignItems="center"
          p={1.5}
          sx={{
            backgroundColor: "#F9FAFB", // Tailwind's gray-50
            borderRadius: 2,
          }}
        >
          <Avatar
            src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20therapist%20with%20warm%20smile%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20clean%20professional%20background%2C%20natural%20lighting%2C%20friendly%20and%20approachable%2C%20high%20quality%20professional%20photo&width=48&height=48&seq=8&orientation=squarish"
            alt="Dr. Sarah Johnson"
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box>
            <Typography fontWeight={500}>Dr. Sarah Johnson</Typography>
            <Typography variant="body2" color="text.secondary">
              Trauma Specialist
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Message />}
            sx={{
              ml: "auto",
              backgroundColor: "#DBEAFE",
              color: "#1D4ED8",
              textTransform: "none",
              fontSize: "0.875rem",
              borderRadius: "9999px",
              "&:hover": {
                backgroundColor: "#BFDBFE",
              },
            }}
          >
            Message
          </Button>
        </Box>

        {/* Mentor 2 */}
        <Box
          display="flex"
          alignItems="center"
          p={1.5}
          sx={{
            backgroundColor: "#F9FAFB",
            borderRadius: 2,
          }}
        >
          <Avatar
            src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20therapist%20with%20kind%20expression%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20clean%20professional%20background%2C%20natural%20lighting%2C%20friendly%20and%20approachable%2C%20high%20quality%20professional%20photo&width=48&height=48&seq=9&orientation=squarish"
            alt="Dr. Michael Chen"
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box>
            <Typography fontWeight={500}>Dr. Michael Chen</Typography>
            <Typography variant="body2" color="text.secondary">
              EMDR Therapist
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Message />}
            sx={{
              ml: "auto",
              backgroundColor: "#DBEAFE",
              color: "#1D4ED8",
              textTransform: "none",
              fontSize: "0.875rem",
              borderRadius: "9999px",
              "&:hover": {
                backgroundColor: "#BFDBFE",
              },
            }}
          >
            Message
          </Button>
        </Box>
      </Stack>

      {/* CTA Button */}
      <Button
        fullWidth
        sx={{
          mt: 3,
          backgroundColor: "#EFF6FF", // Tailwind's blue-50
          color: "#1D4ED8",
          textTransform: "none",
          py: 1,
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#DBEAFE",
          },
        }}
      >
        <SearchIcon sx={{ mr: 1 }} />
        Find More Professionals
      </Button>
    </Paper>
  );
};
