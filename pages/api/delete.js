import initDB from "../../helper/initDB";
import usercomment from "../../models/usercomment";

initDB();

export default async function Delete (req, res) {
  switch (req.method) {
    case "DELETE":
      await deletecom(req, res);
      break;
  }
};

const deletecom = async (req, res) => {
  try {
    const deletecomments = await usercomment.deleteMany({ name: "pari" });
    res.status(200).json(deletecomments);
  } catch (err) {
    console.log(err);
  }
};
