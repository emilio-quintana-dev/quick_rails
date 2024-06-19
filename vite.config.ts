import { defineConfig } from "vite";
import Rails from "vite-plugin-rails";
import ReactPlugin from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [Rails(), ReactPlugin()],
});
