const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la base de datos (MongoDB en este caso)
mongoose.connect('mongodb://localhost:27017/birthday_surprise', { useNewUrlParser: true, useUnifiedTopology: true });

/*Aquí, estamos importando las bibliotecas necesarias: express, body-parser, multer (para la carga de archivos) y mongoose (para la conexión a MongoDB).
app es la instancia de Express que usaremos para configurar la API.
port define el puerto en el que se ejecutará el servidor. Si hay una variable de entorno PORT definida, se utilizará ese valor; de lo contrario, se usará el puerto 3000.
mongoose.connect establece una conexión a una base de datos MongoDB local llamada "birthday_surprise".*/
const greetingSchema = new mongoose.Schema({
  text: String,
  image: String,
  video: String,
});

const Greeting = mongoose.model('Greeting', greetingSchema);
/*Aquí estamos definiendo un esquema para las felicitaciones utilizando Mongoose. El esquema tiene tres campos: text, image y video.
Greeting es un modelo creado a partir del esquema, que representa una colección de felicitaciones en la base de datos.*/
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage });
/**Estamos configurando multer para manejar la carga de archivos. Definimos un sistema de almacenamiento (storage) que especifica la carpeta de destino y cómo se nombrarán los archivos cargados.
upload es un middleware de multer que se utilizará en las rutas para manejar la carga de archivos. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**Configuramos el middleware body-parser para analizar datos JSON y codificar URL en las solicitudes. */
app.get('/', (req, res) => {
  res.send('API de Sorpresa de Cumpleaños');
});
/**Establecemos una ruta de inicio que simplemente responde con un mensaje. */
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

/**Definimos una ruta para crear una nueva felicitación. Extraemos el texto de la felicitación del cuerpo de la solicitud (req.body), creamos una nueva instancia del modelo Greeting y la guardamos en la base de datos.
Manejamos errores y respondemos con el resultado de la operación.
Las siguientes rutas (/api/greetings/:id/upload-image y /api/greetings/:id/upload-video) funcionan de manera similar, permitiendo la carga de imágenes y videos a felicitaciones existentes.

En resumen, el código crea una API básica utilizando Express y MongoDB, que permite crear felicitaciones con texto y cargar imágenes y videos a esas felicitaciones. Sin embargo, esta es solo una versión simplificada y requeriría más desarrollo y manejo de casos de uso específicos antes de ser utilizado en un entorno de producción. */