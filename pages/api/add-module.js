import { MongoClient } from "mongodb";

const helper = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);

      const db = client.db();

      const coursesCollection = db.collection("courses");

      const filter = { courseName: data.courseName };
      const options = { upsert: false };

      const updateDoc = {
        $push: {
          modules: data.moduleName,
        },
      };

      const result = await coursesCollection.updateOne(
        filter,
        updateDoc,
        options
      );

      console.log(result);
      client.close();
      //   res.status(201).json({ message: "data posted", result });
    } catch (error) {
      console.log(error);
    }
  }
};

export default helper;
