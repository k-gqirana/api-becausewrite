// Import required modules
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const crypto = require("crypto"); // For unsubscribe functionality
const emailObjects = require("./emailObjects");
const cors = require("cors");

// Create an Express app
const app = express();
app.use(express.json());

// Serving static files from the assets directory i.e. images or css files
app.use("/assets", express.static(__dirname + "/public"));

// Allow CORS
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose schema for email data
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subscribed: { type: Boolean, default: true },
  unsubscribeToken: { type: String },
  lastEmailIndex: { type: Number, default: -1 }, //field to track the last email sent index
});

// Create a Mongoose model for emails
const Email = mongoose.model("Email", emailSchema);

// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  // Set up your email provider's SMTP settings
  service: "Gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

// Sending Welcome Email
const welcomeEmailData = emailObjects.welcomeEmail;
const sendEmail = async (recipient, welcomeEmail) => {
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: recipient,
    subject: welcomeEmail.subject,
    html: welcomeEmail.html,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendNextEmail = async (user) => {
  const emailData = emailObjects.emailTips;
  if (user.lastEmailIndex < emailData.length - 1) {
    const nextEmailIndex = user.lastEmailIndex + 1;
    const currentEmailData = emailData[nextEmailIndex];
    user.lastEmailIndex = nextEmailIndex;
    await sendEmail(user.email, currentEmailData);
    user.lastEmailIndex = nextEmailIndex;
    await user.save();
  }
};

// Define the route to handle form submissions
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email is already subscribed
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already used to subscribe" });
    }

    // Create a new email object
    const newEmail = new Email({ email });

    // Generate a unique unsubscribe token
    const unsubscribeToken = crypto.randomBytes(20).toString("hex");
    newEmail.unsubscribeToken = unsubscribeToken;

    // Save the email to the database

    // Send Welcome email
    sendEmail(email, welcomeEmailData);
    newEmail.lastEmailIndex = 0;
    await newEmail.save();
    res.json({ message: "Subscription successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Unsubscribe functionality
// Update to remove a subscribed user from the DB
app.post("/unsubscribe", async (req, res) => {
  const { email, unsubscribeToken } = req.body;

  try {
    // Find the email in the database
    const existingEmail = await Email.findOne({ email });

    if (!existingEmail) {
      return res.status(404).json({ error: "Email not found" });
    }

    if (existingEmail.unsubscribeToken !== unsubscribeToken) {
      return res.status(401).json({ error: "Invalid unsubscribe token" });
    }

    // Update the subscribed field to false
    existingEmail.subscribed = false;
    await existingEmail.save();

    res.json({ message: "Unsubscribed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Schedule the email sending function to run once a week (adjust the timing as needed)
const intervalInMilliseconds = (7 * 24 * 60 * 60 * 1000) / 4; // Sends 3 emails a week
setInterval(sendNextEmail, intervalInMilliseconds);

// ------------------------------- Start the server when we connect to the database -------------------------//

const port = 3001;
app.listen(port, () => {
  const db = mongoose.connection;
  db.on("error", console.error.bind("console", "MongoDB Connection Error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
  console.log(`Server started on port ${port}`);
});

// ---------------------------- Front-end Code to adjust -------------------------------- //
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Input, Button } from 'your-ui-library'; // Replace 'your-ui-library' with the actual library you are using

// const YourComponent = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request to the backend to subscribe the email
//       await axios.post('/subscribe', { email });

//       // Reset the email input
//       setEmail('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input
//         variant="outlined"
//         color="warning"
//         size="md"
//         placeholder="Email Address"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         sx={{ marginBottom: '0.6rem' }}
//       />
//       <Button
//         variant="contained"
//         sx={{
//           ':hover': { backgroundColor: '#9d7f5a' },
//           backgroundColor: '#222',
//         }}
//         size="meduim"
//         type="submit"
//         fullWidth
//       >
//         Let's Do This!
//       </Button>
//     </form>
//   );
// };

// export default YourComponent;
