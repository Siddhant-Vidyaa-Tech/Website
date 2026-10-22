import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
  budget?: string;
  source?: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (
    !isNonEmptyString(body.name) ||
    !isNonEmptyString(body.company) ||
    !isNonEmptyString(body.email) ||
    !isNonEmptyString(body.service) ||
    !isNonEmptyString(body.description)
  ) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const payload = {
    name: body.name.trim(),
    company: body.company.trim(),
    email: body.email.trim(),
    phone: isNonEmptyString(body.phone) ? body.phone.trim() : "",
    service: body.service.trim(),
    description: body.description.trim(),
    budget: isNonEmptyString(body.budget) ? body.budget.trim() : "",
    source: isNonEmptyString(body.source) ? body.source.trim() : "",
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
