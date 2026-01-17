import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import serverless from "serverless-http"; // ✅ Add this for Vercel

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

/**
 * CORS config - must be registered BEFORE body parsers & routes
 * Works for both localhost + live domains (Netlify / Vercel)
 */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://mrskipbags.ie",
  "https://www.mrskipbags.ie",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS not allowed"), false);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// handle preflight explicitly
app.options(/.*/, (req, res) => {
  console.log("CORS preflight handled for:", req.headers.origin, req.path);
  res.sendStatus(204);
});

app.use(express.json());

// ✅ Health check
app.get("/api/health", (_, res) =>
  res.json({
    status: "ok",
    env: process.env.NODE_ENV || "development",
    time: new Date().toISOString(),
  })
);

// ✅ Enquiry route — sends to business inbox + auto-reply
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

    // Send to business inbox
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

    // Auto-reply to customer
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

    console.log("✅ Emails sent successfully");
    return res
      .status(200)
      .json({ success: true, message: "Enquiry and auto-reply sent." });
  } catch (err) {
    console.error("❌ Mail send error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send emails." });
  }
});

// ✅ fallback
app.get("/", (_, res) => res.send("Mr Skip Bags backend running ✅"));

// ✅ For Vercel: export as serverless handler
export default serverless(app);


// ✅ For Localhost: normal server run
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🟢 Server listening on port ${PORT} (LOCAL DEV)`);
  });
}
