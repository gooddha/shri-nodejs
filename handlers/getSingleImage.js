const { uploadPath } = require('../utils/upload');

const getSingleImage = (req, res) => {
  res.download(uploadPath + '/' + req.params.id + '.jpeg');
}

module.exports = getSingleImage;