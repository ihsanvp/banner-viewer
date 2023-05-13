import { defineConfig } from "vite"
import wasm from "vite-plugin-wasm-pack"

export default defineConfig({
    server: {
        watch: {
            ignored: ["!crate/pkg/*"]
        }
    },
    plugins: [
        wasm("./crate")
    ]
})