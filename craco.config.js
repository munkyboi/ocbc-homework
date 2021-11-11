const path = require("path")

module.exports = {
  webpack: {
    alias: {
      "@Pages": path.resolve(__dirname, "src/Pages/"),
      "@Common": path.resolve(__dirname, "src/Common/"),
      "@Redux": path.resolve(__dirname, "src/Redux/"),
      "@Slices": path.resolve(__dirname, "src/Redux/Slices/"),
      "@Routers": path.resolve(__dirname, "src/Routers/"),
      "@Utils": path.resolve(__dirname, "src/Utils/"),
    }
  }
}