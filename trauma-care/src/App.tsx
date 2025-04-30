import React from "react";
import { Button, Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Trauma Care
      </Typography>

      <Typography variant="body1">
        This app helps users track and manage their trauma recovery journey.
      </Typography>

      <Button variant="contained" color="secondary">
        Get Started
      </Button>
    </Container>
  );
};

export default App;
