import {
  Home as HomeIcon,
  Build as ToolsIcon,
  Article as ArticleIcon,
  SelfImprovement as MeditationIcon,
  VideoLibrary as VideoIcon,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { ChangeEvent, useState } from "react";

const TabBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabChange = (_: ChangeEvent<{}>, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
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
  );
};

export default TabBar;
