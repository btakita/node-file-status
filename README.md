# node-file-status
read/write process metadata to the file system

## Usage

~~~javascript
var fileStatus = require('file-status');
var path = require('path');
var path2 = path.join(__dirname, 'tmp', 'server.status.json');
fileStatus.write(path2, {custom: 'data'});
// Writes {pid: process.pid, mtime: new Date(), custom: 'data'} to __dirname/tmp/server.status.json
console.info(fileStatus.read(path2));
// {pid: process.pid, mtime: new Date(), custom: 'data'}
~~~
