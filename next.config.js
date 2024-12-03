export async function rewrites() {
  return [
    {
      source: "/blog/:path*",
      destination: "http://localhost:3001/blog/:path*",
    },
  ];
}
