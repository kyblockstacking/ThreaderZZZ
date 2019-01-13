module.exports = function (sequelize, DataTypes) {

    //associate with userId and threadId
    var VoteAlready = sequelize.define("VoteAlready", {

        upvoteBtn: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        neutralBtns: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        downvoteBtns: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        {
            timestamps: false
        });

    // VoteAlready.associate = function (models) {
    //     User.hasMany(models.Threads);
    // };

    return VoteAlready;

};