// Example: app/api/comments/route.js (for App Router)
export async function POST(request) {
  const body = await request.json();

  const username = process.env.WP_USERNAME;
  const appPassword = process.env.WP_APP_PASSWORD;

  const auth = Buffer.from(`${username}:${appPassword}`).toString("base64");

  const wpRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/comments`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author_name: body.name,
      author_email: body.email,
      content: body.comment,
      post: body.postId,
      status: "hold",
    }),
  });

  if (!wpRes.ok) {
    const error = await wpRes.json();
    return new Response(JSON.stringify({ error }), { status: wpRes.status });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
