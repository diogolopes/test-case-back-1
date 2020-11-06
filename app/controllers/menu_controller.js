var MenuService = require('../services/menu_service')

exports.getMenus = async function (req, res) {
    try {
        var menus = await MenuService.getMenus()
        return res.status(200).json(menus);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getMenuByUser = async function (req, res) {
    try {
        const { usuarioId } = req.params;
        var usuario = await MenuService.getMenuByUser(usuarioId);
        return res.status(200).json(usuario);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}