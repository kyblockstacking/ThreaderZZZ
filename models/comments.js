module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        replies: DataTypes.STRING,
        submitDate: DataTypes.DATEONLY,
        upvotes: DataTypes.INTEGER,
        downvotes: DataTypes.INTEGER
    },
    {
        timestamps: false
    });

    Comments.associate = function (models) {
        Comments.hasMany(models.VoteAlready);
    }
    return Comments;

};