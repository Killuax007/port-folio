import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json();

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
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div
      style="
        font-family: Helvetica, Arial, sans-serif;
        text-direction: center;
        min-width: 1000px;
        margin: 0px auto;
        overflow: auto;
        line-height: 2;
        padding: 3px 6px;
      "
    >
      <p style="font-size: 35px; font-weight: 600; color: #0a0a0a">
        Greetings Developer
      </p>
      <p style="font-size: 24px; font-weight: 300; color: #0a0a0a">
        My Self ${name}
      </p>
      <h2
        style="
          width: max-content;
          padding: 0 10px;
          color: #0a0a0a;
          font-size: 20px;
        "
      >
        ${message}
      </h2>

      <p style="font-size: 20px; color: #0a0a0a">
        Hope i can get back from you ASAP :)
      </p>
      <p style="font-size: 16px; color: #0a0a0a">Regards, ${name}</p>
      <p style="font-size: 16px; color: #0a0a0a">Email : ${email}</p>
      <p style="font-size: 16px; color: #0a0a0a">Phone : ${phone}</p>
      <hr style="border: none; border-top: 1px solid #1f2937" />
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
