import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Header } from "./layouts/Header";
import { MainLayout } from "./layouts/MainLayout";
import { keyframes } from "@emotion/react";

// Custom keyframe animation using Emotion (used by MUI)
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#EFF6FF",
          color: "#374151",
          animation: `${fadeIn} 0.3s ease-out forwards`,
        }}
      >
        <Header />
        <MainLayout />
      </Box>
    </>
  );
};

export default App;
