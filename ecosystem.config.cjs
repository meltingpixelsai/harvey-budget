module.exports = {
  apps: [
    {
      name: "harvey-budget",
      script: "dist/index.js",
      cwd: "/home/deploy/projects/harvey-budget",
      node_args: "--enable-source-maps",
      env: {
        NODE_ENV: "production",
        PORT: 8405,
      },
      max_memory_restart: "256M",
      autorestart: true,
      watch: false,
    },
  ],
};
