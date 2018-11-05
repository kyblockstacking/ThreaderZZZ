module.exports = function (sequelize, DataTypes) {
    let MentorCandidate = sequelize.define("MentorCandidate", {
        body: DataTypes.TEXT,
        agreeTime: DataTypes.STRING,
        accepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return MentorCandidate;

}