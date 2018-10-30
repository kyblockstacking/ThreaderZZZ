module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        signupDate: DataTypes.DATEONLY,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
        upvote: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        downvote: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        email: DataTypes.STRING,

    },
    {
        timestamps: false
    });

    User.associate = function (models) {
        User.hasMany(models.Threads);
        User.hasMany(models.Comments);
        User.hasMany(models.VoteAlready);
    }

    return User;

};