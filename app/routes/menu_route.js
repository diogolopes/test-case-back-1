var express = require('express');
var router = express.Router();

var MenuController = require('../controllers/menu_controller')

router.get('/menus', MenuController.getMenus)

router.get('/menus/:usuarioId', MenuController.getMenuByUser)

module.exports = router;
