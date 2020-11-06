module.exports = (sequelize, DataTypes) => {
    const Perfil = sequelize.define("Perfil", {
      perfil_nome: DataTypes.STRING,
      descricao: DataTypes.STRING
    }, {
      timestamps: false
    });
    Perfil.associate = function(models) {
      Perfil.hasMany(models.Usuario);
      Perfil.belongsToMany(models.Menu, { through: 'PerfilMenus' });
      
      //Perfil.belongsTo(models.PerfilMenu, { foreignKey : 'perfil_id', as: 'perfilMenus'})
    };
    return Perfil;
};