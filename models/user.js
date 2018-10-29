module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        signupDate: DataTypes.DATEONLY,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        password: DataTypes.STRING,
        userName: DataTypes.STRING,
        upvote: DataTypes.INTEGER,
        downvote: DataTypes.INTEGER,
        email: DataTypes.STRING,

    },
    {
        timestamps: false
    });

    User.associate = function (models) {
        User.hasMany(models.Threads);
        User.hasMany(models.Comments);
    }

    return User;

};