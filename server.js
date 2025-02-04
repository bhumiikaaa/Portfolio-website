require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve ALL static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));  // <-- This is the key change

// Contact Form Route
app.get('/public/projects.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
  });
  
// The following route is now redundant since express.static handles it
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// ... rest of your server code