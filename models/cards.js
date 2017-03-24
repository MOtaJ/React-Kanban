'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cards = sequelize.define('Cards', {
    Title: DataTypes.STRING,
    Priority: DataTypes.TEXT,
    CreatedBy: DataTypes.STRING,
    AssignedTo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cards;
};