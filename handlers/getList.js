const path = require('path');
const fs = require('fs');
const { uploadPath } = require('../utils/upload');

const getList = (req, res) => {
  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      res.send(err);
    } else {
      const list = files.map(fileName => {
        const filePath = path.resolve(uploadPath, fileName);
        let fileStat = fs.statSync(filePath);

        return {
          id: fileName.split('.')[0],
          size: fileStat.size,
          date: fileStat.ctime
        }
      })
      res.json(list);
    }
  });
}

module.exports = getList;