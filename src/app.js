import express from "express";
import cors from "cors";
import profileRoute from "./routes/profile.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/me", profileRoute);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found. Try visiting /me for the profile endpoint.",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong on the server. Please try again later.",
  });
});

export default app;
