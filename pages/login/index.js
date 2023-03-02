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
      <div className="flex justify-center flex-col items-center gap-4">
        <span>Sample Account Login:</span>
        <p>Email: test@test.com</p>
        <p>Password: 12345678</p>
      </div>
    </>
  );
};

LoginPage.displayName = "LoginPage";

export default LoginPage;
