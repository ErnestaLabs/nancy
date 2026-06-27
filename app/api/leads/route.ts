import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN
const AIRTABLE_BASE = process.env.AIRTABLE_BASE

function checkConfig() {
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE) {
    return { ok: false, error: 'Missing Airtable configuration. Please set AIRTABLE_TOKEN and AIRTABLE_BASE environment variables.' }
  }
  return { ok: true }
}

// Create a new lead
export async function POST(request: NextRequest) {
  try {
    const config = checkConfig()
    if (!config.ok) {
      return NextResponse.json({ success: false, error: config.error }, { status: 500 })
    }

    const body = await request.json()
    const { name, email, monthlyRevenue, biggestTimeWaster, idealOutcome, urgency } = body

    if (!name || !email || !idealOutcome) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email, and idealOutcome are required.' },
        { status: 400 }
      )
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/Leads`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [{ fields: { 'Name': name, 'Email': email, 'Monthly Revenue': monthlyRevenue || '', 'Biggest Time Waster': biggestTimeWaster || '', 'Ideal Outcome': idealOutcome, 'Urgency': urgency || '', 'Status': 'New' } }],
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Airtable API Error:', errorData)
      return NextResponse.json({ success: false, error: 'Failed to create lead in Airtable' }, { status: 500 })
    }

    const data = await response.json()
    return NextResponse.json({ success: true, message: 'Lead created successfully', data: data.records[0] })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

// Get all leads (for admin panel)
export async function GET(request: NextRequest) {
  try {
    const config = checkConfig()
    if (!config.ok) {
      return NextResponse.json({ success: false, error: config.error }, { status: 500 })
    }

    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '100'
    const offset = searchParams.get('offset')

    let url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Leads?maxRecords=${limit}`
    if (offset) url += `&offset=${offset}`

    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${AIRTABLE_TOKEN}`, 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Airtable API Error:', errorData)
      return NextResponse.json({ success: false, error: 'Failed to fetch leads from Airtable' }, { status: 500 })
    }

    const data = await response.json()
    return NextResponse.json({ success: true, data: data.records, offset: data.offset })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
