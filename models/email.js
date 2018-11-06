module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    recipient: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    message: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    userRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    chatLink: {
      type: DataTypes.STRING
    }
  });

  Email.associate = (models) => {
    Email.belongsTo(models.User);
  };

  return Email;
};
