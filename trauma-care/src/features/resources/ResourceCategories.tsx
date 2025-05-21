import { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Avatar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  Home as HomeIcon,
  Build as ToolsIcon,
  Article as ArticleIcon,
  SelfImprovement as MeditationIcon,
  VideoLibrary as VideoIcon,
  Group as GroupIcon,
  MedicalServices as HelpIcon,
  Spa as SelfCareIcon,
} from "@mui/icons-material";

export const ResourceCategories = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabChange = (_: any, newValue: string) => {
    setSelectedTab(newValue);
  };

  const resources = [
    {
      key: "articles",
      label: "Articles",
      bgColor: "#DBEAFE",
      iconUrl:
        "https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20open%20book...&width=100&height=100",
    },
    {
      key: "meditations",
      label: "Meditations",
      bgColor: "#E0E7FF",
      iconUrl:
        "https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20peaceful...&width=100&height=100",
    },
    {
      key: "videos",
      label: "Videos",
      bgColor: "#FEE2E2",
      iconUrl:
        "https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20video...&width=100&height=100",
    },
    {
      key: "support",
      label: "Support Groups",
      bgColor: "#EDE9FE",
      iconUrl:
        "https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20group...&width=100&height=100",
    },
    {
      key: "help",
      label: "Professional Help",
      bgColor: "#CCFBF1",
      iconUrl:
        "https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20professional...&width=100&height=100",
    },
    {
      key: "selfcare",
      label: "Self-Care",
      bgColor: "#FEE2E2",
      iconUrl:
        "https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20self%20care...&width=100&height=100",
    },
  ];

  return (
    <>
      {/* Resource Categories */}
      <Box mb={6}>
        <Typography variant="h6" fontWeight="medium" mb={2}>
          Resources For You
        </Typography>
        <Grid container spacing={2}>
          {resources.map((item) => (
            <Grid item xs={4} key={item.key}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  textAlign: "center",
                  borderRadius: 3,
                  cursor: "pointer",
                }}
                onClick={() => handleTabChange(null, item.key)}
              >
                <Avatar
                  sx={{
                    bgcolor: item.bgColor,
                    width: 48,
                    height: 48,
                    mx: "auto",
                    mb: 1,
                  }}
                >
                  <img
                    src={item.iconUrl}
                    alt={item.label}
                    style={{ width: 32, height: 32, objectFit: "contain" }}
                  />
                </Avatar>
                <Typography variant="body2" fontWeight="medium">
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom Tab Bar */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid #e0e0e0",
          zIndex: 1300,
        }}
      >
        <BottomNavigation
          value={selectedTab}
          onChange={handleTabChange}
          sx={{ bgcolor: "#fff", px: 1 }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Tools"
            value="tools"
            icon={<ToolsIcon />}
          />
          <BottomNavigationAction
            label="Articles"
            value="articles"
            icon={<ArticleIcon />}
          />
          <BottomNavigationAction
            label="Meditation"
            value="meditations"
            icon={<MeditationIcon />}
          />
          <BottomNavigationAction
            label="Videos"
            value="videos"
            icon={<VideoIcon />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};
