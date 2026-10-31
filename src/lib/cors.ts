const allowedOrigins = new Set([
  "https://do-gnpu.netlify.app",
  "https://fdo.gnpu.edu.ua",
  "http://localhost:5173",
]);

export const getCorsHeaders = (request: Request) => {
  const origin = request.headers.get("Origin");

  const headers = new Headers({
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  });

  if (origin && allowedOrigins.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }

  return headers;
};

export const createCorsPreflightResponse = (request: Request) =>
  new Response(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
