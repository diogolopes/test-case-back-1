module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      chave_menu: DataTypes.STRING,
      painel: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Menu.associate = function(models) {
    Menu.hasMany(models.SubMenu);
    Menu.belongsToMany(models.Perfil, { through: 'PerfilMenus' });
  };
  /* 
	Menu.associate = function(models) {
		Menu.belongsTo(models.PerfilMenu, { foreignKey : 'id', as: 'perfilMenus'})
	}; 
	Menu.associate = function(models) {
		Menu.belongsTo(models.SubMenu, { foreignKey : 'id', as: 'subMenus'})
	}; */
  return Menu;
};
