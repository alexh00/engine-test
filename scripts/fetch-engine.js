const fs = require('fs')
const url = require('url');
const http = require('https');
// - updated this to pull down from github...
const engineSrc = 'D:/Work/Engine_2021/bin/engine.js'
const engineUrl = 'https://raw.githubusercontent.com/alexh00/engine/main/bin/engine.js'
const engineDest = './deploy/engine.js'

const defSrc = 'D:/Work/Engine_2021/bin/engine.d.ts'
const defUrl = 'https://raw.githubusercontent.com/alexh00/engine/main/bin/engine.d.ts'
const defDest = './types/engine.d.ts'

const downloadFile = (file_url, destination, callback) => {
  
  http.get(file_url, function (res) {
    const { statusCode } = res;
    //https://nodejs.org/api/http.html#http_http_get_url_options_callback
    if (statusCode !== 200) {
      console.log('Request Failed.\n' +
        `Status Code: ${statusCode}`);
    } else {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', function (chunk) {
        // console.log('chunk', chunk)
        rawData += chunk;
      })
        
      res.on('end', function () {
        // console.log(options.path, 'downloaded', rawData)
        fs.writeFileSync(destination, rawData, 'utf-8')
        //console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
        callback()
      });
    }
    
  });
};

const useLocal = false;
if (useLocal) {
  // fs.copyFileSync(engineSrc, engineDest)
  // fs.copyFileSync(defSrc, defDest)
  console.log('engine was fetched')
} else {

  //TODO - read the version code from the package json

  downloadFile(engineUrl, engineDest, () => {
    console.log('engine downloaded')
    downloadFile(defUrl, defDest, () => {
      console.log('defs downloaded')
    })
  })
}
