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
          removeDevtoolsInProd: false,
          injectReact: true 
        }
      )
    ],
    server: {
      port: 3000,
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
