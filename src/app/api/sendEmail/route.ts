import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { to  } = await req.json(); // Extract only email

    if (!to ) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }
    

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Secure variable, not NEXT_PUBLIC
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      
      subject: "Thank you for subscribing!",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333;">Hello,</h2>
              <p style="font-size: 16px; color: #555;">
                Thank you for subscribing to our newsletter. We will keep you updated with the latest news.
              </p>
              <p style="font-size: 16px; color: #555;"><strong>Best regards,</strong></p>
              <p style="font-size: 16px; color: #ff4500;"><strong>Team Vizento</strong></p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
