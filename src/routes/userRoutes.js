import express from 'express';
const router = express.Router();

// Registro de usuario
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Logica para registrar usuario
  res.status(201).send('Usuario registrado.');
});

// Login de usuario
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Logica de autenticacion
  res.send('Usuario autenticado.');
});

export default router;
