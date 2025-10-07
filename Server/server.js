import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

/**
 * CORS config - must be registered BEFORE body parsers & routes
 * - In dev it allows localhost ports
 * - In prod it explicitly allows your site origin(s)
 * - app.options('*', ...) ensures preflight responses are handled
 */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://mrskipbags.ie",
  "https://www.mrskipbags.ie",
  // add Netlify preview domain(s) if needed
];

// Use cors middleware: dynamic origin resolver
app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      // optionally allow everything in DEV by uncommenting next line:
      // if (process.env.NODE_ENV !== "production") return callback(null, true);
      return callback(new Error("CORS not allowed"), false);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// make sure preflight is explicitly handled
app.options(/.*/, (req, res) => {
  console.log("CORS preflight handled for:", req.headers.origin, req.path);
  res.sendStatus(204);
});

// Body parser after CORS
app.use(express.json());

// Simple health check
app.get("/api/health", (_, res) =>
  res.json({
    status: "ok",
    env: process.env.NODE_ENV || "development",
    time: new Date().toISOString(),
  })
);

// Enquiry route — sends to business inbox + auto-reply
app.post("/api/enquiry", async (req, res) => {
  console.log("POST /api/enquiry from origin:", req.headers.origin);
  const {
    name,
    address1,
    address2,
    eircode,
    mobile,
    email,
    collectionDate,
    notes,
    bagType,
    qty,
  } = req.body || {};

  if (!name || !email || !mobile) {
    return res
      .status(400)
      .json({ success: false, message: "Name, Email & Mobile are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
        service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send to business
    await transporter.sendMail({
      from: `"Mr Skip Bags" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: "🟢 New Skip Bag Collection Enquiry",
      html: `
        <h2>New Collection Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Address:</b> ${address1 || ""} ${address2 || ""}</p>
        <p><b>EIR Code:</b> ${eircode || "N/A"}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Collection Date:</b> ${collectionDate || "N/A"}</p>
        <p><b>Notes:</b> ${notes || "None"}</p>
        <p><b>Bag Type:</b> ${bagType || "N/A"}</p>
        <p><b>Quantity:</b> ${qty || 1}</p>
      `,
    });

    // auto-reply to customer
    await transporter.sendMail({
      from: `"Mr Skip Bags" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "🟢 Thank You for Your Enquiry – Mr Skip Bags",
      html: `
        <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px;">
          <div style="background:linear-gradient(to right, #166534, #16a34a); color:white; padding:12px;">
            <h2 style="margin:0;">Mr Skip Bags</h2>
          </div>
          <div style="padding:16px;">
            <h3 style="color:#166534;">Thank You, ${name}!</h3>
            <p>We’ve received your enquiry for skip bag collection. Our team will be in touch soon to confirm your collection details.</p>
            <p>Kind regards,<br/>The Mr Skip Bags Team</p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully");
    return res
      .status(200)
      .json({ success: true, message: "Enquiry and auto-reply sent." });
  } catch (err) {
    console.error("Mail send error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send emails." });
  }
});

// fallback
app.get("/", (_, res) => res.send("Mr Skip Bags backend running"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} | NODE_ENV=${process.env.NODE_ENV}`);
});
