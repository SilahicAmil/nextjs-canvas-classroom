import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

const createUserCredentialsHandler = async (email, password, role) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, role }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
  s;
};

const Signup = ({}) => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const emailRefValue = emailRef.current.value;
    const passwordRefValue = passwordRef.current.value;

    try {
      const result = await createUserCredentialsHandler(
        emailRefValue,
        passwordRefValue,
        "student"
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }

    router.push("/login");
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 ">
        <div>
          <Image
            className="mx-auto h-12 w-auto"
            src="/images/scholar-logo-no-bg.png"
            alt="Scholar Logo"
            width={1000}
            height={1000}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formSubmitHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                // required
                ref={emailRef}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white "
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                // required
                ref={passwordRef}
                className="bg-white relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-around ">
            <div className="flex gap-2">
              <label htmlFor="teacher">Teacher</label>
              <input type="checkbox" />
            </div>
            <div className="flex gap-2">
              <label htmlFor="teacher">Student</label>
              <input type="checkbox" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
