import Head from "next/head";
import Login from "@/components/Login/Login";

const LoginPage = ({}) => {
  return (
    <>
      <Head>
        <title>Scholar - Login</title>
      </Head>
      <div>
        <Login />
      </div>
    </>
  );
};

LoginPage.displayName = "LoginPage";

export default LoginPage;
