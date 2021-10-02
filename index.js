const express = require('express');
const { upload, uploadPath } = require('./utils/upload');
const {
  uploadImage,
  deleteImage,
  getSingleImage,
  getList,
  mergeImages
} = require('./handlers/');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/upload', express.static(uploadPath));

app.post('/upload', upload.single('image'), uploadImage);
app.delete('/image/:id', deleteImage);
app.get('/image/:id', getSingleImage);
app.get('/list', getList);
app.get('/merge?front=:frontId&back=:backId&color=:color&threshold=:threshold', mergeImages);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:/${PORT}`);
});