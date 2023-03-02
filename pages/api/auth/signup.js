import { connectToDB } from "../../../lib/db";
import { hashPass } from "../../../lib/auth";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "invalid input" });
    return;
  }

  const client = await connectToDB();

  const db = client.db();

  const exisitingUser = await db.collection("users").findOne({ email: email });

  if (exisitingUser) {
    res.stats(422).json({ message: "User Exists Already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPass(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  console.log(result);
  res.status(201).json({
    message: "added user",
  });
  client.close();
};

export default handler;
