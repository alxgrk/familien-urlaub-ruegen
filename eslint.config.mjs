import next from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "build/**",
      "out/**",
      "next-env.d.ts",
    ],
  },
  ...next,
  {
    // Dead code: the render block is commented out in pages/buchung.tsx, so these
    // setState-in-effect warnings can never be observed. Remove together with the file.
    files: ["components/timeline.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;