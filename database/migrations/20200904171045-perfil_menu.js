module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('PerfilMenus', {
      perfil_id: {
        type: DataTypes.INTEGER,
                  references: {
                      model: 'Perfils',
                      key: 'id'
                  }
              },
      menu_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Menus',
            key: 'id'
        }
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('PerfilMenus');
  }
};
