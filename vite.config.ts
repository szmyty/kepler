import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import fixReactVirtualized from 'esbuild-plugin-react-virtualized'

export default defineConfig(() => {
  return {
    optimizeDeps: {
      esbuildOptions: {
        plugins: [fixReactVirtualized],
      },
    },
    plugins: [
      react(
        {
          jsxImportSource: "react",
          jsxRuntime: "automatic",
        }
      )
    ],
    publicDir: "public",
    server: {
      port: 3000,
      host: true,
      strictPort: true, 
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
      },
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
  };
});
