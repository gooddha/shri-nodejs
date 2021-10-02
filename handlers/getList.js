const fs = require('fs');
const { uploadPath } = require('../utils/upload');

const getList = (req, res) => {
  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      res.send(err);
    } else {
      res.send(files);
    }
  });
}

module.exports = getList;