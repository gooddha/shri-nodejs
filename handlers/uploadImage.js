const upload = async (req, res) => {
  const { file } = req;

  if (file.mimetype == "image/jpeg") {
    const id = file.filename.split('.')[0];
    res.status(200).json({ id });
  } else {
    res.status(400).send('Error: File is not image, please send jpeg file');
  }
}

module.exports = upload;