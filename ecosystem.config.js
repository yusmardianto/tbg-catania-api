module.exports = {
  apps: [
    {
      name: "hotel_strapi",
      script: "index.js",
      exec_mode: "fork",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
