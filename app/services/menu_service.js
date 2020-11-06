var { Menu, Usuario, Perfil, PerfilMenu, SubMenu } = require("../models");

exports.getMenus = async function() {
  try {
    var menus = await Menu.findAll();
    return menus;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};

exports.getMenuByUser = async id => {
  try {
    var usuario = await Usuario.findByPk(id, {
      attributes: ["nome"],
      include: [
        {
          model: Perfil,
          attributes: ["perfil_nome"],
          include: [
            {
              model: Menu,
              attributes: ["painel"],

              include: [
                {
                  model: SubMenu,
                  attributes: ["url", "form", "painel"]
                }
              ]
            }
          ]
        }
      ]
    });
    console.log(usuario);

    /* var menus = await Usuario.findByPk({
            where: {id: usuarioId },
            include: [
                {
                    model: Perfil,
                    include: [
                        {
                            model: PerfilMenu,                            
                            include:[ 
                                {
                                    model: Menu,
                                    include: [
                                        {
                                            model: SubMenu,
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }); */
    return JSON.parse(JSON.stringify(usuario.Perfil.Menus));
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users", e);
  }
};
