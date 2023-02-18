const userService = require("../services/user.service.js");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !background || !avatar) {
    res.status(400).send({ message: "Submit All Fields For Registration" });
  }

  const user = await userService.createService(req.body);

  res.status(201).send({
    user: {
      name,
      username,
      email,
      avatar,
      background,
    },
    message: "User Created successfully",
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no users" });
  }
  res.send(users);
};

const findById = async (req, res) => {
  const user = req.user;

  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !background && !avatar) {
    res.status(400).send({ message: "Submit at least one field for update" });
  }

  const { id, user } = req;

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );
  res.send({ message: "User updated successfully" });
};

module.exports = {
  create,
  findAll,
  findById,
  update,
};
