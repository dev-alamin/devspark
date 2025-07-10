export async function POST(req) {
  const body = await req.json();

  if (body.honeypot) {
    return new Response(JSON.stringify({ message: "Bot detected" }), { status: 400 });
  }
  
  const WP_USERNAME = process.env.WP_USERNAME;
  const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD;
  const API_URL =
  process.env.NEXT_PUBLIC_API_URL + "/wp-json/devspark/v1/contact";

  const credentials = Buffer.from(`${WP_USERNAME}:${WP_APP_PASSWORD}`).toString(
    "base64"
  );

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ message: "Failed to submit" }), {
      status: 500,
    });
  }

  const data = await res.json();
  return Response.json({ message: data.message });
}
