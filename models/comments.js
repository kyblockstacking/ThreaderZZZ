module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        replies: DataTypes.TEXT,
        submitDate: DataTypes.DATEONLY,
        upvotes: DataTypes.INTEGER,
        downvotes: DataTypes.INTEGER
    });

    Comments.associate = function (models) {
        Comments.hasMany(models.VoteAlready);
        Comments.belongsTo(models.User);
    }
    return Comments;

};