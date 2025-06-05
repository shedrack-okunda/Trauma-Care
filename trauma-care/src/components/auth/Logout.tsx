// components/Logout.tsx
import React from "react";
import { Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Logout: React.FC = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#FEE2E2",
        color: "#B91C1C",
        fontWeight: 500,
        fontSize: "0.975rem",
        borderRadius: 9999,
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#FCA5A5",
        },
      }}
      endIcon={<ExitToAppIcon />}
    >
      Logout
    </Button>
  );
};

export default Logout;
