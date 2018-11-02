module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    'User',
    {
      signupDate: DataTypes.DATEONLY,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      userName: DataTypes.STRING,
      upvote: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      downvote: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      email: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      user: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      token: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  User.associate = function(models) {
    User.hasMany(models.Threads);
    User.hasMany(models.Comments);
    User.hasMany(models.VoteAlready);
    User.hasMany(models.Email);
  };

  return User;
};
