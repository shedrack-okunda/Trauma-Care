import React from "react";
import { Box, Typography, Button, Chip, Paper, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

export const FeaturedCategories: React.FC = () => {
  return (
    <Box bgcolor="white" borderRadius={2} p={3} boxShadow={1} mb={3}>
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <Box
            width={32}
            height={32}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            bgcolor="purple.100"
            mr={1}
          >
            <StarIcon sx={{ color: "purple.600", fontSize: 18 }} />
          </Box>
          <Typography fontWeight={500}>Featured Resources</Typography>
        </Box>
        <Button size="small" sx={{ color: "teal.600", textTransform: "none" }}>
          View All
        </Button>
      </Box>

      {/* Resource Cards */}
      <Stack spacing={2}>
        {/* Card 1 */}
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
          <Chip
            label="Article"
            size="small"
            sx={{
              bgcolor: "blue.100",
              color: "blue.700",
              fontSize: "0.75rem",
              mb: 1,
            }}
          />
          <Typography fontWeight={500} variant="subtitle1">
            Understanding Trauma Responses
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Learn about common trauma responses and how to manage them
            effectively.
          </Typography>
          <Box display="flex" alignItems="center" mt={1} color="text.secondary">
            <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="caption">10 min read</Typography>
          </Box>
        </Paper>

        {/* Card 2 */}
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
          <Chip
            label="Meditation"
            size="small"
            sx={{
              bgcolor: "indigo.100",
              color: "indigo.700",
              fontSize: "0.75rem",
              mb: 1,
            }}
          />
          <Typography fontWeight={500} variant="subtitle1">
            Grounding Techniques
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            A guided meditation to help you stay present and centered.
          </Typography>
          <Box display="flex" alignItems="center" mt={1} color="text.secondary">
            <HeadphonesIcon sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="caption">15 min</Typography>
          </Box>
        </Paper>

        {/* Card 3 */}
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
          <Chip
            label="Video"
            size="small"
            sx={{
              bgcolor: "rose.100",
              color: "rose.700",
              fontSize: "0.75rem",
              mb: 1,
            }}
          />
          <Typography fontWeight={500} variant="subtitle1">
            Healing Through Movement
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Gentle exercises designed for trauma recovery.
          </Typography>
          <Box display="flex" alignItems="center" mt={1} color="text.secondary">
            <VideoCameraFrontIcon sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="caption">20 min</Typography>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};
