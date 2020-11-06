module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("SubMenus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      chave_sub_menu: {
        allowNull: false,
        type: DataTypes.STRING
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING
      },
      form: {
        allowNull: false,
        type: DataTypes.STRING
      },
      tabela: {
        allowNull: false,
        type: DataTypes.STRING
      },
      painel: {
        allowNull: false,
        type: DataTypes.STRING
      },
      menu_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Menus',
            key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("SubMenus");
  }
};
