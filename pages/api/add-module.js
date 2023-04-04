import { connectToDB } from "@/lib/db";

const helper = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const moduleData = req.body;

      const client = await connectToDB();

      if (moduleData.moduleName.trim() === "") {
        client.close();
        res.status(422).json({ message: "Invalid Input" });
        return;
      }

      const db = client.db();

      const coursesCollection = db.collection("courses");

      const filter = { courseName: moduleData.courseName };

      const options = { upsert: false };

      const updateDoc = {
        $push: {
          modules: { moduleName: moduleData.moduleName },
        },
      };

      const result = await coursesCollection.updateOne(
        filter,
        updateDoc,
        options
      );

      client.close();
    } catch (error) {
      console.log(error);
    }
  }
};

export default helper;
