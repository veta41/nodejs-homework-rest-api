const { User } = require("../../models/user");

const updateUserSubscription = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });

  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = updateUserSubscription;
