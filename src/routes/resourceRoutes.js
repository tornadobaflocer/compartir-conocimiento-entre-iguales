import express from 'express';
const router = express.Router();

// Subida de recursos
router.post('/upload', (req, res) => {
  const { title, type, content } = req.body;
  // Logica para subir recurso
  res.status(201).send('Recurso subido.');
});

// Buscador de recursos
router.get('/search', (req, res) => {
  const { query } = req;
  // Logica para buscar recursos
  res.send('Resultados de búsqueda.');
});

export default router;
