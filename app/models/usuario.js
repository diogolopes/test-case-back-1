module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    nome: DataTypes.STRING,
    password: DataTypes.STRING,
    perfilId: DataTypes.INTEGER
  }, 
  {
    timestamps: false
  });
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Perfil, { foreignKey : 'perfilId' })
  };
  return Usuario;
};
