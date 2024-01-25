const UserModel = require("../../models/UserModel");

const UserService = {
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password,
    });
  },

  upload: async ({ _id, username, introduction, gender, avatar }) => {
    if (avatar) {
      return UserModel.updateOne(
        {
          _id,
        },
        {
          username,
          introduction,
          gender,
          avatar,
        }
      );
    } else {
      return UserModel.updateOne(
        {
          _id,
        },
        {
          username,
          introduction,
          gender,
        }
      );
    }
  },

  add: async ({ username, password, role, gender, introduction, avatar }) => {
    return UserModel.create({
      username,
      password,
      role,
      gender,
      introduction,
      avatar,
    });
  },

  delete: async ({ _id }) => {
    return UserModel.deleteOne({ _id });
  },

  put: async (body) => {
    return UserModel.updateOne({ _id: body._id }, body);
  },

  getList: async () => {
    return UserModel.find({}, [
      "username",
      "password",
      "role",
      "avatar",
      "introduction",
      "gender",
    ]);
  },
};

module.exports = UserService;
