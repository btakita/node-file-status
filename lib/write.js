var fs = require('fs');
function write(statusFilePath, data) {
  var data2 = data || {}
    , mtime = data2.mtime || Date.now()
    , status = Object.assign({
        pid: process.pid,
        mtime: mtime
      }, data2)
    , statusJson = JSON.stringify(status)
    , pid = new Buffer(statusJson)
    , fd = fs.openSync(statusFilePath, 'w')
    , offset = 0
    ;
  while (offset < pid.length) {
    offset += fs.writeSync(fd, pid, offset, pid.length - offset);
  }
  fs.closeSync(fd);
  fs.utimesSync(statusFilePath, mtime, mtime);
  return status;
}
module.exports = write;
