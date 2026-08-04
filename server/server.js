import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./src/contact.router.js";
import { verifySmtp } from "./src/email.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "ok", uptime: process.uptime() }));

app.use("/api/contact", contactRouter);

app.use((req, res) => res.status(404).json({ error: "Not found." }));

// --- MongoDB connection diagnostics ---
mongoose.connection.on("connected", () => console.log("✅ MongoDB: connected"));
mongoose.connection.on("error", (err) => console.error("❌ MongoDB error:", err.message));
mongoose.connection.on("disconnected", () => console.warn("⚠️  MongoDB: disconnected"));

async function start() {
  if (!process.env.MONGO_URI) {
    console.warn("⚠️  MONGO_URI is not set — copy .env.example to .env and fill it in.");
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
      console.error("❌ Failed to connect to MongoDB:", err.message);
      console.error(
        "   Check: (1) password is correct with no special chars needing encoding, " +
          "(2) your IP is whitelisted in Atlas Network Access, " +
          "(3) the connection string includes a database name, e.g. /portfolio"
      );
    }
  }

  // --- SMTP diagnostics ---
  await verifySmtp();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
}

start();