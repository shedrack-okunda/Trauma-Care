import React, { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

export const Accessibility: React.FC = () => {
  const [textSize, setTextSize] = useState<"small" | "medium" | "large">(
    "medium"
  );

  const handleTextSizeChange = (size: "small" | "medium" | "large") => {
    setTextSize(size);
  };

  // Map MUI font sizes
  const textSizeMap = {
    small: "0.875rem", // 14px
    medium: "1rem", // 16px
    large: "1.125rem", // 18px
  };

  return (
    <Box fontSize={textSizeMap[textSize]}>
      <Paper
        elevation={1}
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          p: 2,
          mb: 3,
        }}
      >
        {/* Header */}
        <Box display="flex" alignItems="center" mb={1}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#F3F4F6", // gray-100
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <AccessibilityNewIcon sx={{ color: "#4B5563" }} /> {/* gray-600 */}
          </Box>
          <Typography fontSize="0.875rem" fontWeight={500}>
            Accessibility
          </Typography>
        </Box>

        {/* Buttons */}
        <Box display="flex" justifyContent="space-around" mt={2}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleTextSizeChange("small")}
            sx={{
              px: 2,
              py: 0.5,
              borderRadius: 2,
              backgroundColor: textSize === "small" ? "#CCFBF1" : "#F3F4F6", // teal-100 or gray-100
              color: textSize === "small" ? "#0F766E" : "inherit", // teal-700
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: textSize === "small" ? "#99F6E4" : "#E5E7EB", // lighter teal or gray
              },
            }}
          >
            A<sup style={{ fontSize: "0.6em" }}>–</sup>
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => handleTextSizeChange("medium")}
            sx={{
              px: 2,
              py: 0.5,
              borderRadius: 2,
              backgroundColor: textSize === "medium" ? "#CCFBF1" : "#F3F4F6",
              color: textSize === "medium" ? "#0F766E" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: textSize === "medium" ? "#99F6E4" : "#E5E7EB",
              },
            }}
          >
            A
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => handleTextSizeChange("large")}
            sx={{
              px: 2,
              py: 0.5,
              borderRadius: 2,
              backgroundColor: textSize === "large" ? "#CCFBF1" : "#F3F4F6",
              color: textSize === "large" ? "#0F766E" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: textSize === "large" ? "#99F6E4" : "#E5E7EB",
              },
            }}
          >
            A<sup style={{ fontSize: "0.6em" }}>+</sup>
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
