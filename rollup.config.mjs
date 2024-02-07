import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import ts from "rollup-plugin-ts"

export default {
    input: 'src/index.ts',
    output: {
        file: "dist/magiutils.mjs",
        format: "es"
    },
    plugins: [nodeResolve(), commonjs(), json(), ts()]
}