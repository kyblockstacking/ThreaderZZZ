module.exports = function (sequelize, DataTypes) {
    let RequestMentor = sequelize.define("RequestMentor", {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        userDisabled: DataTypes.BOOLEAN
    });

    RequestMentor.associate = function (models) {
        RequestMentor.hasMany(models.MentorCandidate);
        RequestMentor.belongsTo(models.User);
    }
    return RequestMentor;

};