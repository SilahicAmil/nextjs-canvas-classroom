import { MongoClient } from "mongodb";
import { supabase } from "@/lib/supabaseClient";

const helper = async (req, res) => {
  if (req.method === "GET") {
    try {
      //   const compData = req.body;

      const { data, error } = await supabase.storage
        .from("modules")
        .download("Math-101/Module-5");

      //   const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);

      //   const db = client.db();

      //   const coursesCollection = db.collection("courses");

      //   const filter = { courseName: data.courseName };
      //   const options = { upsert: false };

      //   const updateDoc = {
      //     $push: {
      //       modules: [...data],
      //     },
      //   };

      //   const result = await coursesCollection.updateOne(
      //     filter,
      //     updateDoc,
      //     options
      //   );

      console.log(data);
      console.log(error);
      //   client.close();
      //   res.status(201).json({ message: "data posted", result });
    } catch (error) {
      console.log(error);
    }
  }
};

export default helper;
