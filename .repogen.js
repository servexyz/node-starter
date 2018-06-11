const path = require('path');

const config = {
  repospacePath: path.join(__dirname, "sample-module"),
  repositories: [
    {
      servexyz: "npm-starter-sample-module"
    }
  ]
};

module.exports = { config };
