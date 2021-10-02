const fs = require('fs');
const path = require('path');
const { uploadPath } = require('../utils/upload');

const deleteImage = (req, res) => {
  const file = path.resolve(uploadPath, req.params.id + '.jpeg');

  fs.unlink(file, (err) => {
    if (err) {
      res.status(400).send(`There is no file with id ${req.params.id} \n ${err}`);
    } else {
      res.json({ id: req.params.id });
    }
  });
};

module.exports = deleteImage;