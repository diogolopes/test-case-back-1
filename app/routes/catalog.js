var express = require('express');
var router = express.Router();

// Require controller modules.
var menu_controller = require('../controllers');

router.get('/menu/findall', async (req, res) => {
  const menu = await menu_controller.menus
  console.log(menu);
  res.json(menu);
});

module.exports = router;
