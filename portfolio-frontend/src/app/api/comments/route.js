export async function POST(request) {
  try {
    const body = await request.json();

    console.log("Received body:", body);

    const username = process.env.WP_USERNAME;
    const appPassword = process.env.WP_APP_PASSWORD;

    if (!username || !appPassword) {
      console.error("Missing credentials");
      return new Response(JSON.stringify({ error: "Missing WP credentials" }), { status: 500 });
    }

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

    const data = await wpRes.json();

    if (!wpRes.ok) {
      console.error("WP error:", data);
      return new Response(JSON.stringify({ error: data }), {
        status: wpRes.status,
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });

  } catch (error) {
    console.error("API route error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
