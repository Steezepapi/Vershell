import { NextResponse } from 'next/server'

// In-memory storage (use database in production)
let contacts = []

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create contact object
    const contact = {
      id: Date.now() + Math.random(),
      name,
      email,
      company: company || '',
      message,
      timestamp: new Date(),
      status: 'new'
    }

    // Store contact
    contacts.push(contact)

    // Log the inquiry
    console.log('New client inquiry received:', {
      name,
      email,
      company,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you soon.',
      contactId: contact.id
    })

  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      contacts: contacts,
      total: contacts.length
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { success: false, message: 'Error fetching contacts' },
      { status: 500 }
    )
  }
}