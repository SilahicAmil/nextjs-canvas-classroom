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
      <div className="flex justify-center items-center gap-8">
        <div className="">
          <span>Sample Student Account Login:</span>
          <p>Email: test@test.com</p>
          <p>Password: 12345678</p>
        </div>
        <br />
        <div>
          <span>Sample Teacher Account Login</span>
          <p>Email: admin@admin.com</p>
          <p>Password: 12345678</p>
        </div>
      </div>
    </>
  );
};

LoginPage.displayName = "LoginPage";

export default LoginPage;
