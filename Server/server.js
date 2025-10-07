import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ Dynamic Port (Render provides PORT automatically)
const PORT = process.env.PORT || 3001;

// ✅ Middleware
app.use(express.json());

// ✅ CORS setup (supports both localhost + live domain)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://mrskipbags.ie",
  "https://www.mrskipbags.ie",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  } else {
    res.header("Access-Control-Allow-Origin", "*");
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// ✅ Health Check
app.get("/api/health", (_, res) =>
  res.json({
    status: "✅ Backend is alive",
    environment: process.env.NODE_ENV || "development",
    time: new Date().toISOString(),
  })
);

// ✅ Enquiry API (sends both: to business + auto-reply to customer)
app.post("/api/enquiry", async (req, res) => {
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
  } = req.body;

  if (!name || !email || !mobile)
    return res
      .status(400)
      .json({ success: false, message: "Name, Email & Mobile are required" });

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 📩 1. Send full enquiry to your business inbox
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

    // 📧 2. Auto-reply to the customer
    await transporter.sendMail({
      from: `"Mr Skip Bags" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "🟢 Thank You for Your Enquiry – Mr Skip Bags",
      html: `
        <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #e5e5e5; border-radius:10px;">
          <div style="background:linear-gradient(to right, #166534, #16a34a); color:white; padding:12px 20px; border-radius:8px 8px 0 0;">
            <h2 style="margin:0;">Mr Skip Bags</h2>
          </div>
          <div style="padding:20px;">
            <h3 style="color:#166534;">Thank You, ${name}!</h3>
            <p>We’ve received your enquiry for skip bag collection. Our team will be in touch soon to confirm your collection details.</p>
            
            <br/>
            <p>Kind regards,</p>
            <p><b>The Mr Skip Bags Team</b></p>
            <hr/>
            <p style="font-size:12px;color:#777;">📍 Dublin, Ireland | 🌐 www.mrskipbags.ie</p>
          </div>
        </div>
      `,
    });

    console.log("✅ Enquiry + Auto-reply emails sent.");
    res
      .status(200)
      .json({ success: true, message: "Enquiry and auto-reply sent successfully!" });
  } catch (err) {
    console.error("❌ Mail error:", err.message);
    res.status(500).json({ success: false, message: "Failed to send emails" });
  }
});

// 🧠 Fallback route
app.get("/", (_, res) => res.send("Mr Skip Bags backend running 🟢"));

app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT} | CORS + Mail ready`)
);
