module.exports = function(sequelize, DataTypes) {
    var Threads = sequelize.define("Threads", {
        userId: DataTypes.STRING,
        categoryId: DataTypes.STRING,
        threadName: DataTypes.STRING,
        upvotes: DataTypes.INTEGER,
        downvotes: DataTypes.INTEGER,
        submitDate: DataTypes.DATEONLY,
        keyword: DataTypes.STRING,

    });

    return Threads;

};