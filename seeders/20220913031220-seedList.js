"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const listData = require("../data.json");
    listData.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Lists", listData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lists", null, {});
  },
};
