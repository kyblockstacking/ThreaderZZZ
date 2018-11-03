module.exports = function(sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
        recipient: DataTypes.STRING,
        message: DataTypes.STRING,
        userRead: DataTypes.BOOLEAN,
        userName: DataTypes.STRING
    },
    {
        timestamps: false
    });

    return Email;
};