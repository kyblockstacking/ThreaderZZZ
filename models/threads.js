module.exports = function (sequelize, DataTypes) {
    var Threads = sequelize.define("Threads", {
        threadName: DataTypes.STRING,
        threadSummary: DataTypes.TEXT,
        upvotes: DataTypes.INTEGER,
        downvotes: DataTypes.INTEGER,
        submitDate: DataTypes.DATEONLY,
        keyword: DataTypes.STRING,
    }
    );

    Threads.associate = function (models) {
        Threads.hasMany(models.Comments);
        Threads.belongsTo(models.User);
        Threads.belongsTo(models.Category)
    }

    return Threads;

};