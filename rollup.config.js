import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import ts from "rollup-plugin-ts";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const config = 
{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
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
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ["**/*.stories.tsx"],
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      extensions: [".css"],
    }),
  ],
  external: ["react", "react-dom", "styled-components"]
};

export default config;