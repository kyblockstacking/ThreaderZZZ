module.exports = function(sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
        recipient: DataTypes.STRING,
        message: DataTypes.STRING,
        read: DataTypes.BOOLEAN

    },
    {
        timestamps: false
    });

    return Email;
};