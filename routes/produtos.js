const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const produtoMiddleware = require('../middlewares/produtoMiddleware');

/* GET clientes*/
router.get('/', produtoController.findAll);
/* POST clientes*/
router.post('/', produtoMiddleware.produtoMiddleware, produtoController.save);
/* PUT clientes*/
router.put('/', produtoController.update);
/* DELETE clientes*/
router.delete('/:id', produtoController.remove);

module.exports = router;
