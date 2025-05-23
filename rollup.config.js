import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import ts from "rollup-plugin-ts";
import preserveDirectives from 'rollup-preserve-directives'

const packageJson = require("./package.json");

const config = 
{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
      interop: "auto",
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    ts(),
    preserveDirectives.default(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ["**/*.stories.tsx"],
      tsconfig: "./tsconfig.json",
      sourceMapCallback: (file, map) => {
        if (file.endsWith(".js")) {
          return map;
        }
        return null;
      }
    }),
    postcss({
      extensions: [".css"],
    }),
  ],
  external: ["react", "react-dom"]
};

export default config;