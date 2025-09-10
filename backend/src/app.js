import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/enrollments", enrollmentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
