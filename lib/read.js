var fs = require("fs");
module.exports = function(statusFilePath) {
  if (fs.existsSync(statusFilePath)) {
    return JSON.parse(fs.readFileSync(statusFilePath));
  } else {
    return {};
  }
};
