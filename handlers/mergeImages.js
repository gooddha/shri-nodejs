const fs = require('fs');
const path = require('path');
const { uploadPath } = require('../utils/upload');
const { replaceBackground } = require("backrem");

const mergeImages = (req, res) => {
  const { front, back, color, threshold } = req.query;

  const rgb = color.split(',').map(Number);
  const thresholdNum = Number(threshold);

  const frontFile = fs.createReadStream(
    path.resolve(uploadPath, front + '.jpeg')
  );

  const backFile = fs.createReadStream(
    path.resolve(uploadPath, back + '.jpeg')
  );

  replaceBackground(frontFile, backFile, rgb, thresholdNum).then(
    (readableStream) => {
      readableStream.pipe(res);
    }
  );

}

module.exports = mergeImages;