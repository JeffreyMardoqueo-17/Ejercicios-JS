const {array, user} = require('./MODULE/myModule');
console.log(array)
///Gestion de proyecto en azure y control de versiones en git
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la base de datos (MongoDB en este caso)
mongoose.connect('mongodb://localhost:27017/birthday_surprise', { useNewUrlParser: true, useUnifiedTopology: true });

// Definición del esquema y modelo de Felicitación
const greetingSchema = new mongoose.Schema({
  text: String,
  image: String,
  video: String,
});

const Greeting = mongoose.model('Greeting', greetingSchema);

// Configuración de Multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage });

// Middleware para analizar datos JSON y codificar URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('API de Sorpresa de Cumpleaños');
});

// Ruta para crear una nueva felicitación
app.post('/api/greetings', (req, res) => {
  const { text } = req.body;
  
  const newGreeting = new Greeting({ text });
  newGreeting.save((err, greeting) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocurrió un error al guardar la felicitación.' });
    } else {
      res.status(201).json(greeting);
    }
  });
});

// Ruta para subir imagen a una felicitación existente
app.post('/api/greetings/:id/upload-image', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const image = req.file.filename;

  Greeting.findByIdAndUpdate(id, { image }, { new: true }, (err, updatedGreeting) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocurrió un error al actualizar la felicitación.' });
    } else {
      res.json(updatedGreeting);
    }
  });
});

// Ruta para subir video a una felicitación existente
app.post('/api/greetings/:id/upload-video', upload.single('video'), (req, res) => {
  const { id } = req.params;
  const video = req.file.filename;

  Greeting.findByIdAndUpdate(id, { video }, { new: true }, (err, updatedGreeting) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocurrió un error al actualizar la felicitación.' });
    } else {
      res.json(updatedGreeting);
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
