module.exports = function(sequelize, DataTypes) {
    var Mentor = sequelize.define(Mentor, {
        mentee: DataTypes.STRING

    },
    {
        timestamps: false
    });
    return Mentor;

};