const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

dotenv.config();

// Import routes
const adminRoutes = require("./Routes/adminRoutes.js");
const ProjectRoutes = require("./Routes/ProjectRoutes.js");
const BannerRoutes = require("./Routes/BannerRoutes.js");
const contactUsRoutes = require("./Routes/contactUsRoutes.js");

const app = express();

app.use(helmet()); // Adds secure HTTP headers
app.use(morgan("combined")); // Logs all requests in Apache combined format

// Enable CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactUsRoutes);
app.use("/api/banner", BannerRoutes);
app.use("/api/project", ProjectRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 ERROR:", err.stack);
  res
    .status(500)
    .json({ success: false, message: "Something broke!", error: err.message });
});

// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
