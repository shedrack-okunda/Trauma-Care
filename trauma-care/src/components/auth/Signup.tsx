// components/SignupForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

const SignupForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering with:", form);

    // TODO: API call
    // On success:
    navigate("/login");
  };

  return (
    <Box
      component="form"
      onSubmit={handleRegister}
      sx={{ maxWidth: 500, mx: "auto", mt: 8 }}
    >
      <Typography variant="h5" mb={2}>
        Sign Up
      </Typography>

      {[
        "name",
        "username",
        "email",
        "phone",
        "age",
        "password",
        "confirmPassword",
      ].map((field) => (
        <TextField
          key={field}
          fullWidth
          label={field[0].toUpperCase() + field.slice(1)}
          name={field}
          type={field.toLowerCase().includes("password") ? "password" : "text"}
          margin="normal"
          value={form[field as keyof typeof form]}
          onChange={handleChange}
        />
      ))}

      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Register
      </Button>
      <Typography mt={2}>
        Already have an account?{" "}
        <Button onClick={() => navigate("/login")}>Login</Button>
      </Typography>
    </Box>
  );
};

export default SignupForm;
