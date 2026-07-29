export default {
    server: {
        proxy: {
            "/api/dreams": {
                target: "http://localhost:3000",
                changeOrigin: true
            }
        }
    }
}