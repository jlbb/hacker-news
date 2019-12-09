const { Schema, model } = require("mongoose");

const StorySchema = new Schema({
  url: {
    type: String,
    required: true
  }
});

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  bookmarks: {
    type: [StorySchema],
    required: false
  }
});

const AppSchema = new Schema({
  users: {
    type: [UserSchema],
    required: false,
    default: []
  },
  stories: {
    type: [StorySchema],
    required: false,
    default: []
  }
});
module.exports = {
  AppModel: model("appSchema", AppSchema),
  UserModel: model("userSchema", UserSchema),
  StoryModel: model("storySchema", StorySchema)
};
