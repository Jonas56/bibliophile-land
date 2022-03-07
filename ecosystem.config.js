module.exports = {
  apps: [
    {
      name: "bibliophile",
      script: "index.js",
      watch: ".",
      instances: "0",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
