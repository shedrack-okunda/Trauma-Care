import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SpaIcon from "@mui/icons-material/Spa"; // Similar to fa-seedling

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

        {/* Right side: Search + Safe Exit */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#6B7280", mr: 1 }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FEE2E2", // Tailwind's bg-red-100
              color: "#B91C1C", // Tailwind's text-red-700
              fontWeight: 500,
              fontSize: "0.875rem",
              borderRadius: 9999, // fully rounded
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#FCA5A5",
              },
            }}
            endIcon={<ExitToAppIcon />}
          >
            Safe Exit
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
