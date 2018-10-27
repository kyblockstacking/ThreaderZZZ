module.exports = function(sequelize, DataTypes) {
    var Mentor = sequelize.define(Mentor, {
        mentee: DataTypes.STRING

    });

    return Mentor;

};