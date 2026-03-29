import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !listId || !serverPrefix) {
    return NextResponse.json(
      { error: "Mailchimp is not configured yet." },
      { status: 503 }
    );
  }

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  if (res.status === 400) {
    const body = await res.json();
    // Already subscribed is treated as success
    if (body.title === "Member Exists") {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 400 });
  }

  if (!res.ok) {
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
