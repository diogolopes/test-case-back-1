module.exports = (sequelize, DataTypes) => {
    const PerfilMenu = sequelize.define("PerfilMenu", {}, {
      timestamps: false
    });
    return PerfilMenu;
  };
  