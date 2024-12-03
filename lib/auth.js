import cookie from "cookie";

export function getAuthToken(req) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  return cookies.auth_token || null;
}
