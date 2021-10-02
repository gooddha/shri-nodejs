const fs = require('fs');
const { uploadPath } = require('../utils/upload');

const deleteImage = (req, res) => {
  const file = `${uploadPath}\\${req.params.id}.jpeg`;

  fs.unlink(file, (err) => {
    if (err) {
      res.send(`There is no file with id ${req.params.id} \n ${err}`);
    } else {
      res.send(`File ${req.params.id}.jpeg succesfully deleted`);
    }
  });
};

module.exports = deleteImage;