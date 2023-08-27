import User from '../../models/User.js';

export default async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.body.email },
      { password: req.body.password, online: true },
      { new: true }
    );

    if (user) {
      delete user.password;
      return res.status(200).json({
        message: "You have successfully logged in!",
        response: {
          user: user.email,
          photo:user.photo,
          token: req.token
        }
      });
    } else {
      return res.status(400).json({
        response: null,
        message: "NOT Logged in!"
      });
    }
  } catch (error) {
    return next(error);
  }
};
