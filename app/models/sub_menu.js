module.exports = (sequelize, DataTypes) => {
  const SubMenu = sequelize.define(
    "SubMenu",
    {
      chave_sub_menu: DataTypes.STRING,
      url: DataTypes.STRING,
      form: DataTypes.STRING,
      tabela: DataTypes.STRING,
      painel: DataTypes.STRING,
      menuId: DataTypes.INTEGER
    },
    { timestamps: false }
  );
  SubMenu.associate = function(models) {
    SubMenu.belongsTo(models.Menu, { foreignKey : 'menuId' })
  };

  return SubMenu;
};
