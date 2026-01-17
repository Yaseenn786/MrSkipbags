import nodemailer from "nodemailer";

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://mrskipbags.ie",
  "https://www.mrskipbags.ie",
  "https://mr-skipbags.vercel.app",
];

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, address1, address2, eircode, mobile, email, collectionDate, notes, bagType, qty } = req.body || {};

  if (!name || !email || !mobile) {
    return res.status(400).json({ success: false, message: "Name, Email & Mobile are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

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
            <p>We've received your enquiry for skip bag collection. Our team will be in touch soon.</p>
            <p>Kind regards,<br/>The Mr Skip Bags Team</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Enquiry and auto-reply sent." });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ success: false, message: "Failed to send emails." });
  }
}