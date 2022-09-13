"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {}
  }
  List.init(
    {
      nik: DataTypes.STRING,
      fullName: DataTypes.STRING,
      place: DataTypes.STRING,
      dateBirth: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "List",
    }
  );
  return List;
};
