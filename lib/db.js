import { MongoClient } from "mongodb";

export const connectToDB = async () => {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);
  return client;
};
