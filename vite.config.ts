import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//untuk di typescript, harus ditambah type nyo di tsconfig.json
//sumber: https://github.com/pd4d10/vite-plugin-svgr/issues/44#issuecomment-1246356418
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	server: {
		port: 3000,
	},
});
