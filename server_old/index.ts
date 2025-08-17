import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve front-end build
app.use(express.static(path.join(__dirname, "../dist")));

// Example API route
app.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Catch-all route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
