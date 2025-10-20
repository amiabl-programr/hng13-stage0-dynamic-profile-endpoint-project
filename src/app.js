import express from "express";
import cors from "cors";
import profileRoute from "./routes/profile.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/me", profileRoute);

export default app;
