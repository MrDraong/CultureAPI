const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const questionCtrl = require('../controllers/question.js');

//ajouter auth après les entrypoints pour utiliser l'authentification
router.get('/all', questionCtrl.getAllQuestions);
router.get('/random', questionCtrl.getRandomQuestion);
router.post('/', questionCtrl.createQuestion);
router.get('/:id', questionCtrl.getOneQuestion);
router.put('/:id', questionCtrl.modifyQuestion);
router.delete('/:id', questionCtrl.deleteQuestion);

module.exports = router;