import { MongoClient } from "mongodb";

const helper = async (req, res) => {
  if (req.method === "PUT") {
    const moduleData = req.body;
    console.log(moduleData);

    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);

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

    console.log(result);
    client.close();
  }
};

export default helper;
