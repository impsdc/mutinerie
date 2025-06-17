import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {},
      fonts: {
        body: { value: "Helvetica Neue" },
        heading: { value: "Helvetica Neue" },
        mono: { value: "Helvetica Neue" },
        semi: { value: "Helvetica Neue" },
        extra: { value: "Helvetica Neue" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, theme);
