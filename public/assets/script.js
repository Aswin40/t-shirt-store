const testFolder = '.';
const fs = require('fs');

const results = []
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    results.push(file);
  });
  
  console.log(results);
});

console.log(results)
