module.exports = function(sequelize, DataTypes) {
    var Threads = sequelize.define("Threads", {
        threadName: DataTypes.STRING,
        threadSummary: DataTypes.TEXT,
        upvotes: DataTypes.INTEGER,
        downvotes: DataTypes.INTEGER,
        submitDate: DataTypes.DATEONLY,
        keyword: DataTypes.STRING,

    },
    {
        timestamps: false
    });

    Threads.associate = function (models) {
        Threads.hasMany(models.Comments);
    }

    return Threads;

};