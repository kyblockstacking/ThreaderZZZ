module.exports = function(sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
        recipient: DataTypes.STRING,
        title: DataTypes.STRING,
        message: DataTypes.TEXT,
        userRead: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    Email.associate = function(models) {
        Email.belongsTo(models.User);
      };

    return Email;
};