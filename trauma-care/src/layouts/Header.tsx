import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SpaIcon from "@mui/icons-material/Spa"; // Similar to fa-seedling
import Logout from "../components/auth/Logout";

export const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "text.primary",
        px: 2,
        py: 1.5,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        {/* Left side: Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: "#CCFBF1",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 1,
            }}
          >
            <SpaIcon sx={{ color: "#0D9488" }} />{" "}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 500, color: "#0F766E" }}>
            TraumaCare
          </Typography>
        </Box>

        {/* Right side: Search + Logout */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#6B7280", mr: 1 }} aria-label="search">
            <SearchIcon />
          </IconButton>

          <Logout />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
