var express = require('express');
var router = express.Router();
var housectrl = require('../controllers/housectrl');

router.get('/', housectrl.get)

router.post('/', housectrl.create)

router.get('/:id', housectrl.getOne)

router.put('/:id', housectrl.update)

router.delete('/:id', housectrl.remove)

module.exports = router;
