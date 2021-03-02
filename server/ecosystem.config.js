module.exports = {
  apps: [
    {
      name: "Open Recipes",
      script: "npm",
      args: "start",
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-216-123-80.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/recipes-online.pem",
      ref: "origin/main",
      repo: "git@github.com:AndreaUndecimo/opensource-recipes-server.git",
      path: "/home/ubuntu/opensource-recipes-server",
      "post-deploy":
        "npm install && pm2 startOrRestart server/ecosystem.config.js",
    },
  },
};
