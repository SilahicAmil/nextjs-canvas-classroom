import { connectToDB } from "@/lib/db";

const helper = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await connectToDB();

      const db = client.db();

      const coursesCollection = db.collection("courses");

      const result = await coursesCollection.insertOne(data);

      console.log(result);
      client.close();
      res.status(201).json({ message: "data posted", result });
    } catch (error) {
      console.log(error);
    }
  }
};

export default helper;
