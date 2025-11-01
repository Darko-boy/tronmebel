import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      viteSourceLocator({
        prefix: "mgx",
      }),
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port: 5173,
      strictPort: false,
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        "orion-cosmogonic-sheridan.ngrok-free.dev",

        // ✅ Your Replit preview domain (added)
        "719073a0-3944-4afd-8d9e-67c1ec2683b9-00-38md9c7zkrp14.kirk.replit.dev"
      ],
    },
  };
});

