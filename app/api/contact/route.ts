import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the request body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store in MongoDB
    try {
      const { db } = await connectToDatabase()
      await db.collection("messages").insertOne({
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      })
    } catch (error) {
      console.error("Database error:", error)
      // Continue with email sending even if DB fails
    }

    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO || "john.doe@example.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
