export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // فحص حالة الخادم والأدوات المفعلة
    if (url.pathname === "/tools") {
      return new Response(JSON.stringify({
        status: "active",
        server: "Unified MCP Server",
        tools: [
          { name: "memory", status: "ready" },
          { name: "fetch", status: "ready" },
          { name: "sequential_thinking", status: "ready" }
        ]
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Unified MCP Server is online and ready!");
  },
};
