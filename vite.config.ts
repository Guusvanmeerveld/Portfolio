import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import tsconfigPaths from "vite-tsconfig-paths";

import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		alias({
			entries: [
				{ find: "react", replacement: "preact/compat" },
				{ find: "react-dom/test-utils", replacement: "preact/test-utils" },
				{ find: "react-dom", replacement: "preact/compat" },
				{ find: "react/jsx-runtime", replacement: "preact/jsx-runtime" }
			]
		}),
		tsconfigPaths(),
		viteImagemin({
			optipng: {
				optimizationLevel: 7
			},
			mozjpeg: {
				quality: 20
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4
			},
			svgo: {
				plugins: [
					{
						name: "removeViewBox"
					},
					{
						name: "removeEmptyAttrs",
						active: false
					}
				]
			}
		})
	],
	esbuild: {
		logOverride: { "this-is-undefined-in-esm": "silent" }
	}
});
