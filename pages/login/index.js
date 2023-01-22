const LoginPage = ({}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1>Login</h1>
        <div className="">
          <form>
            <div className="flex flex-col">
              <label htmlFor="Email">Email</label>
              <input type="email" id="Email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Password">Password</label>
              <input type="passowrd" id="Password" />
            </div>
            <div className="flex justify-center bg-red-50 text-black">
              <button>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
