'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('rollup-plugin-typescript2');
var postcss = require('rollup-plugin-postcss');
var ts = require('rollup-plugin-ts');
require('rollup-plugin-dts');

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
  external: ["react", "react-dom"]
};

exports.default = config;
