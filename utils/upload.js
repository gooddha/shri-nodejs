const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { nanoid } = require('nanoid');

const uploadPath = path.resolve(__dirname, '../upload');

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
};


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, nanoid() + '.jpeg');
  }
});


module.exports = {
  upload: multer({ storage: storage }),
  uploadPath
}