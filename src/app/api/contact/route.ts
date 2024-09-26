import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const message = formData.get('message');
  
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
      html:
        `
        <div>
          <div style="display: flex;">
            <strong style="font-size: 18px; margin-right: 6px;">Name:</strong>
            <p style="margin: 0; font-size: 16px; line-height: 28px;">${fullName}</p>
          </div>
          <div style="display: flex;">
           <strong style="font-size: 18px; margin-right: 6px;">Email:</strong>
            <p style="margin: 0; font-size: 16px; line-height: 28px;">${email}</p>
          </div>
          <div style="display: flex;">
            <strong style="font-size: 18px; margin-right: 6px;">Message:</strong>
            <p style="margin: 0; font-size: 16px; line-height: 28px;">${message}</p>
          </div>
        </div>
      `
    });
    
    return NextResponse.json({ message: 'Email was successfully sent' });
  } catch (error) {
    console.error(error);
    
    NextResponse.json({ message: 'COULD NOT SEND MESSAGE' }, { status: 500 });
  }
  
}
