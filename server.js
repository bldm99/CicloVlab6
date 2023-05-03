

const express = require('express');
const app = express();


const lenguajes = [
  {
    nombre: "React",
    imagen: "https://global-uploads.webflow.com/5f59f5829ccb43e646633b1d/61dff6b94a2f755042155cf7_How-Reacte-Native-can-save-you-business-cover.png"
  },
  {
    nombre: "Laravel",
    imagen: "https://i0.wp.com/diarioprogramador.com/wp-content/uploads/2022/12/00-portada-laravel-relaciones-uno-a-uno-one-to-one.jpg?fit=1500%2C1000&ssl=1"
  },
  {
    nombre: "Node Js",
    imagen: "https://edteam-media.s3.amazonaws.com/courses/original/3cc48fa0-8327-4561-aa04-dafc3b799909.png"
  },
  {
    nombre: "Django",
    imagen: "https://devhub.in.th/media/cover/django_python_tutorial_o0OP1HH.jpg"
  },

]

//console.log(lenguajes)

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));



// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

app.get('/', (req, res) => {
 

  

  res.render('portafolio.ejs');
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades.ejs', { objetolenguaje: lenguajes });
});

app.get('/contactos', (req, res) => {
  res.render('contactos.ejs');
});









// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto http://localhost:5000');
});
