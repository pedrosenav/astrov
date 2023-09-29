import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { FormFieldsData } from '@/components/sections/Contact-Section'

export async function POST(request: Request) {
  try {
    const { email, message, name }: FormFieldsData = await request.json()

    console.table([email, message, name])

    const user = process.env.NEXT_PUBLIC_USER
    const pass = process.env.NEXT_PUBLIC_PASSWORD

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: { user, pass },
    })

    transporter.sendMail({
      from: `${name} <${user}>`,
      to: user,
      subject: `New message from ${name}`,
      html: `<p>${message}</p>`,
      text: message,
    })

    return NextResponse.json({
      message: 'Email sent successfully',
      status: 200,
      success: true,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: `Action failed: ${error}`,
      status: 500,
      success: false,
    })
  }
}
