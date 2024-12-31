import fs from "fs/promises";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  preflights: [
    {
      layer: "reset",
      getCSS: () =>
        fs.readFile("node_modules/@unocss/reset/tailwind.css", "utf-8"),
    },
  ],
  presets: [presetUno()],
  rules: [
    ["font-casual", { "font-variation-settings": "'CASL' 1;" }],
    ["font-mono-casual", { "font-variation-settings": "'MONO' 1, 'CASL' 1;" }],
  ],
  shortcuts: {
    list: "pl-5",
    box: "max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4",
    head: "sm:text-6xl  text-4xl font-black uppercase",
    section: "block p-2",
    hr: "border-dashed",
    head2: "text-3xl font-extrabold py-5 print:text-xl print:py-1",
    head3: "text-2xl font-black py-5 print:text-xl",
    link: "border-b-2 border-transparent hover:border-ctp-mauve",
  },
  theme: {
    colors: {
      "ctp-base": "#1e1e2e",
      "ctp-mauve": "#eba0ac",
      "ctp-text": "#cdd6f4",
    },
  },
  layers: {
    reset: -1,
    shortcuts: 0,
    components: 1,
    default: 2,
    utilities: 3,
  },
});
