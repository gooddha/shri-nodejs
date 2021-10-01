const multer = require('multer');
const { nanoid } = require('nanoid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, nanoid() + '.jpeg');
  }
});


module.exports = {
  upload: multer({ storage: storage })
}