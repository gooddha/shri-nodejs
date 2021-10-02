const uploadImage = require('./uploadImage');
const deleteImage = require('./deleteImage');
const getSingleImage = require('./getSingleImage');
const getList = require('./getList');
const mergeImages = require('./mergeImages')

module.exports = {
  uploadImage: uploadImage,
  deleteImage: deleteImage,
  getSingleImage: getSingleImage,
  getList: getList,
  mergeImages: mergeImages
}