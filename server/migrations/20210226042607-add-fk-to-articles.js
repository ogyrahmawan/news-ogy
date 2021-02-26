'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Articles', 'WriterId', {
      type: Sequelize.INTEGER,
      references : {
        model: {
          tableName: 'Users'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }),
    await queryInterface.addColumn('Articles', 'EditorId', {
      type: Sequelize.INTEGER,
      references : {
        model: {
          tableName: 'Users'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Articles', 'WriterId')
    await queryInterface.removeColumn('Articles', 'EditorId')
  }
};
