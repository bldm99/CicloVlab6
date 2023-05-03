

const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS' });
});

app.get('/perfil/:id', (req, res) => {
    const imag = "https://devhub.in.th/media/cover/django_python_tutorial_o0OP1HH.jpg"
    const userId = req.params.id;
    // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
    const user = { id: userId, nombre: 'Usuario ' + userId };
    res.render('perfil', { user: user , imag:imag } );
  });
  
  // Ruta para renderizar la plantilla Pug
app.get('/miplantilla-pug', (req, res) => {
    res.render('miplantilla', { mensaje: '¡Hola desde la plantilla Pug!' });
  });
  
  // Ruta para renderizar la plantilla EJS
  app.get('/miplantilla-ejs', (req, res) => {
    const imag = "https://edteam-media.s3.amazonaws.com/courses/original/3cc48fa0-8327-4561-aa04-dafc3b799909.png"
    res.render('miplantilla.ejs', { mensaje: '¡Hola desde la plantilla EJS!' , imag:imag });
  });
  





// Iniciar el servidor en el puerto 5000
app.listen(4000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto http://localhost:4000');
});
