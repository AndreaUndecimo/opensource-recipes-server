module.exports = {
  apps: [{
    name: "open-recipes",
    script: "npm",
    args: "start",
  }, ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "3.139.143.120",
      key: "~/.ssh/open_recipes.pem",
      ref: "origin/main",
      repo: "git@github.com:AndreaUndecimo/opensource-recipes-server.git",
      path: "/home/ubuntu/opensource-recipes-server",
      "post-deploy": "npm install && npx prisma generate && pm2 startOrRestart ecosystem.config.js",
    },
  },
};