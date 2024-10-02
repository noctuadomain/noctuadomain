import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { fullName, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Incoming message from ${fullName} (${email})`,
      text: '',
      html: `
        <div>
          <div style="display: flex;">
            <p style="margin: 0;"><strong style="font-size: 18px; margin-right: 6px;">Name:</strong></p>
            <p style="margin: 0; font-size: 16px;">${fullName}</p>
          </div>
          <div style="display: flex;">
          <p style="margin: 0;"><strong style="font-size: 18px; margin-right: 6px;">Email:</strong></p>
            <p style="margin: 0; font-size: 16px;">${email}</p>
          </div>
          <br />
          <div style="display: flex;">
            <p style="margin: 0;"><strong style="font-size: 18px; margin-right: 6px;">Message:</strong></p>
            <p style="margin: 0; font-size: 16px;">${message}</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ message: 'Message was successfully sent' }, { status: 200 });
  } catch (error) {
    console.error(error);

    NextResponse.json({ message: 'Could not sent message' }, { status: 500 });
  }
}
