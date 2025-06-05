import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import mongoose from "mongoose";
// import swaggerDocs from "../swaggerConfig.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const db = process.env.MONGO_URI as string;

// db connection
mongoose
  .connect(db, {})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => console.log("Error: ", error));

// middlewares
app.use(express.json());
const corsOptions = {
  origin: process.env.ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

// swaggerDocs(app);

app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to TraumaCare.");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  // console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
