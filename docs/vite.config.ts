//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  previewLength: 40,
  buttonLabel: "Procurar",
  placeholder: "Procurar Documentação",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});