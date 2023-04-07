import initDB from "../../helper/initDB";
import user from "../../models/user";

initDB();

export default async function getUser (req, res) {
  switch (req.method) {
    case "GET":
      getUser(req, res);

      break;
    case "POST":
      saveProduct(req, res);
      break;
  }

  async function getUser(req, res) {
    try {
      const resuser = await user.find();
      res.status(200).json(resuser);
    } catch (err) {
      console.log(err);
    }
  }

  async function saveProduct(req, res) {
    const { name, batch, year, teacher } = req.body;
    const resuser = await user.find({ name });
    if (!resuser) {
      res.status(201).json("");

      try {
        const REScomments = await new user({
          name,
          batch,
          year,
          teacher,
        }).save();
        res.status(201).json(REScomments);
      } catch (err) {
        console.log(err);
      }
    }
  }
  res.status(200);
};
