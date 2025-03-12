const fs = require('fs-extra');

fs.move('./build', './dist', { overwrite: true }, (err) => {
  if (err) return console.error(err);
  console.log('Build folder successfully renamed to dist');
});