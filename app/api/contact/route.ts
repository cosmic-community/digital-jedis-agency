import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactRequestBody {
  name: string
  email: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactRequestBody

    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'my@email.com',
      to: 'my@email.com',
      subject: `New Contact Form Submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        `Message:`,
        message,
      ].join('\n'),
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}