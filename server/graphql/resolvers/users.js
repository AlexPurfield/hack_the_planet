require("dotenv").config();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { AuthenticationError, signToken } = require("../../middleware/auth");

module.exports = {
  Mutation: {
    async registerUser(_, { registerInput: { name, email, password } }) {
      // See if an old user exists with email attempting to register
      const oldUser = await User.findOne({ email });

      // Throw Error if user exists
      if (oldUser) {
        throw new Error("User already exists. Please login.");
      }

      // Encrypt Password
      var encryptedPassword = await bcrypt.hash(password, 10);

      // Build out mongoose model
      const newUser = new User({
        name: name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = signToken(newUser);

      // Save our user in MongoDB
      const user = await newUser.save();

      return {
        token,
        user,
      };
    },
    async loginUser(_, { loginInput: { email, password } }) {
      // See if user exists
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      // Check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw AuthenticationError;
      }
      // Create our JWT
      const token = signToken(user);
      // Return user and token
      return {
        token,
        user,
      };
    },
  },
  Query: {
    user: (_, { ID }) => User.findById(ID),
    me: async (_, __, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw AuthenticationError;
    },
  },
};
