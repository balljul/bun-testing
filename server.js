import { file, serve } from "bun";

serve({
  port: 3000,

  fetch(request) {
    if (new URL(request.url).pathname === "/") {
      return file("./public/index.html");
    }

    if (new URL(request.url).pathname.startsWith("/api")) {
      return new Response(JSON.stringify({ message: "Hello from API!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return file(`./public${new URL(request.url).pathname}`);
  },
});

