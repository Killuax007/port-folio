import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject}`,
    html: `
  <html>
  <head>
  </head>
  <body>
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2 ">
      
        <p style="font-size:25px;color:#34d399">Greetings Developer</p>
        <p style="font-size:17px;color:#3b82f6; font-weight:300">My Self ${name}</p>
        
        <h2 style="margin: 0 auto;width: max-content;padding: 0 10px;color: #c084fc;font-size:20px;">${message}</h2>

        <p style="font-size:20px;color:#f472b6">Hope i can get back from you ASAP :) </p>
        <p style="font-size:20px; color:#67e8f9">Regards, ${name}</p>
        <hr style="border:none;border-top:1px solid #eee" />
      </div>
    </div>
  </body>
  </html>
  
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
