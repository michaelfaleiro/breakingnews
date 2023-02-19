import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no users" });
    }
    return res.send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default {
  create,
  findAll,
  findById,
  update,
};
