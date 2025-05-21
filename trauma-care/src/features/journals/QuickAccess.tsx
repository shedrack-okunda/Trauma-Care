import React from "react";
import { Box, Typography, Paper, Button, Chip} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import LockIcon from "@mui/icons-material/Lock";
import AddIcon from "@mui/icons-material/Add";

export const Journal: React.FC = () => {
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
      <Box display="flex" alignItems="center" mb={1.5}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "#FEF3C7", // Tailwind's amber-100
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
          }}
        >
          <BookIcon sx={{ color: "#D97706" }} /> {/* amber-600 */}
        </Box>

        <Typography fontWeight={500}>Journal</Typography>

        <Box ml="auto">
          <Chip
            icon={<LockIcon sx={{ fontSize: 16 }} />}
            label="Private"
            size="small"
            sx={{
              backgroundColor: "#D1FAE5", // green-100
              color: "#047857", // green-700
              fontSize: "0.75rem",
              height: "auto",
              px: 1,
              py: 0.5,
              borderRadius: "9999px",
              ".MuiChip-icon": {
                color: "#047857",
                mr: 0.5,
              },
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <Box textAlign="center" py={1.5}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          Record your thoughts and feelings in a safe space
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#FEF3C7", // amber-100
            color: "#92400E", // amber-700
            textTransform: "none",
            borderRadius: 2,
            px: 2,
            py: 1,
            fontSize: "0.875rem",
            "&:hover": {
              backgroundColor: "#FDE68A", // darker amber on hover
            },
          }}
        >
          New Entry
        </Button>
      </Box>
    </Paper>
  );
};
