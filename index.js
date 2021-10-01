const fs = require('fs');
const path = require('path');
const express = require('express');
const { upload } = require('./utils/upload');

const app = express();
const PORT = 8080;
const UPLOADPATH = path.resolve(__dirname, 'upload');

app.use(express.json());
app.use('/upload', express.static(UPLOADPATH));

app.get('/', (req, res) => res.send('Hello from express!'));
app.get('/ping', (req, res) => res.json({ ping: 'pong' }));

app.get('/list', (req, res) => {
  res.send('list')
})

app.get('/image/:id', (req, res) => {
  res.download(UPLOADPATH + '/' + req.params.id + '.jpeg');
});

app.delete('/image/:id', (req, res) => {
  const file = `${UPLOADPATH}\\${req.params.id}.jpeg`;

  fs.unlink(file, (err) => {
    if (err) {
      res.send(`There is no file with id ${req.params.id} \n ${err}`);
    } else {
      res.send(`File ${req.params.id}.jpeg succesfully deleted`);
    }
  });
})

app.post('/upload', upload.single('image'), async (req, res) => {
  const { file } = req;

  if (file.mimetype == "image/jpeg") {
    const id = file.filename.split('.')[0];
    res.send(`File ${file.originalname} is succesfully uploaded, ID: ${id} \n ${JSON.stringify(file, null, '\t')}`);
  } else {
    res.status(400).send('Error: File is not image, please send jpeg file');
  }
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log('http://localhost:8080/');
})