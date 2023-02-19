import { createService, findAllService } from "../services/news.service.js";

export const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    if (!title || !text || !banner) {
      res.status(400).send({
        message: "Submit all fields for registration",
      });
    }
    await createService({
      title,
      text,
      banner,
      user: { _id: "63f135f842322f14bc795d36" },
    });
    res.send(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const news = await findAllService();
    if (news.length === 0) {
      return res.status(400).send({ message: "There are no registered news" });
    }
    return res.send(news);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
