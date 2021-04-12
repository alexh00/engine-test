const fs = require('fs')
//TODO - update this to pull down from github...
const engineSrc = 'D:/Work/Engine_2021/bin/engine.js'
const engineDest = './deploy/engine.js'

const defSrc = 'D:/Work/Engine_2021/bin/engine.d.ts'
const defDest = './types/engine.d.ts'

//TODO
const downloadFile = (file_url, destination, callback) => {
    var options = {
      host: url.parse(file_url).host,
      port: 80,
      path: url.parse(file_url).pathname
    };
  
    // var file_name = url.parse(file_url).pathname.split('/').pop();
    // var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);
    var file = fs.createWriteStream(destination);
  
    http.get(options, function(res) {
      res.on('data', function(data) {
        file.write(data);
      }).on('end', function() {
        file.end();
        //console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
          callback();
      });
    });
  };




fs.copyFileSync(engineSrc, engineDest)
fs.copyFileSync(defSrc, defDest)

console.log('engine was fetched')