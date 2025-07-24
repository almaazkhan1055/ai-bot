import { cookies } from "next/headers";

export async function POST(request) {
  const { idToken } = await request.json();

  if (!idToken) {
    return Response.json({ error: "No token provided" }, { status: 400 });
  }

  cookies().set("token", idToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return Response.json({ message: "Token stored" });
}
