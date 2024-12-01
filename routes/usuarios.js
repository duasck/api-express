const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

// Get all users
router.get('/', async (req, res) => {
 try {
    const users = await usuarioRepository.findAll();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user by id
router.get('/:id', (req, res) => {
  const user = usuarioRepository.findById(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Create a new user
router.post('/', (req, res) => {
  const user = usuarioRepository.create(req.body);
  res.json({ user });
});

// Update a user
router.put('/:id', (req, res) => {
  const user = usuarioRepository.update(req.params.id, req.body);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user
router.delete('/:id', (req, res) => {
  const user = usuarioRepository.remove(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});



// Authenticate a user
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  try {
    const user = await usuarioRepository.authenticate(email, senha);
    
    if (user) {
      res.json({ user }); // Retorna o usuário caso as credenciais sejam válidas
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


module.exports = router;
