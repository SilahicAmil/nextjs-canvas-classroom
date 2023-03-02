import Head from "next/head";
import Signup from "@/components/Signup/Signup";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Scholar - Create Account</title>
      </Head>
      <div>
        <Signup />
      </div>
    </>
  );
};

SignUpPage.displayName = "SignUpPage";

export default SignUpPage;
