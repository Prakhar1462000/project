const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    CLOUDINARY_URL: "Paste your coludinary url here",
  },
  pwa: {
    dest: "public",
    register: true,
    sw: "/sw.js",
  },
});