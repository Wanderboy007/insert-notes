import initDB from "../../helper/initDB";
import usercomment from "../../models/usercomment";
import user from "../../models/user";

initDB();

export default async function Com(req, res) {
  switch (req.method) {
    case "GET":
      async function getUser(req, res) {
        try {
          const resuser = await usercomment.find();
          res.status(200).json(resuser);
        } catch (err) {
          console.log(err);
        }
      }

      getUser(req, res);

      break;
    case "POST":
      async function saveProduct(req, res) {
        const { name, comment, extra, teacher } = req.body;

        try {
          const REScomments = await new usercomment({
            name,
            comment,
            extra,
            teacher,
          }).save();
          res.status(201).json(REScomments);
        } catch (err) {
          console.log(err);
        }
      }
      saveProduct(req, res);
      break;
  }
}

// const  saveProduct = async (req, res) => {
//   const { name, comment, extra, teacher } = req.body;

//   try {
//     const REScomments = await new usercomment({
//       name,
//       comment,
//       extra,
//       teacher,
//     }).save();
//     res.status(201).json(REScomments);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getUser = async (req, res) => {
//   try {
//     const resuser = await usercomment.find();
//     res.status(200).json(resuser);
//   } catch (err) {
//     console.log(err);
//   }
// };
