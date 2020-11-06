module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Perfils", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      perfil_nome: {
        allowNull: false,
        type: DataTypes.STRING
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING
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
    return queryInterface.dropTable("Perfils");
  }
};
