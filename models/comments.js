module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        replies: DataTypes.STRING,
        userId: DataTypes.STRING,
        submitDate: DataTypes.DATEONLY,
        upvotes: DataTypes.INTEGER,
        downvotes: DataTypes.INTEGER,
        threadsId: DataTypes.STRING,

    });

    return Comments;

};