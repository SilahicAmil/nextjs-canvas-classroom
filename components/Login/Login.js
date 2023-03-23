import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = ({}) => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isError, setIsError] = useState();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const emailRefValue = emailRef.current.value;
    const passwordRefValue = passwordRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      email: emailRefValue,
      password: passwordRefValue,
    });

    if (!result.error) {
      router.replace("/dashboard");
    } else {
      setIsError(true);
    }
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
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={formSubmitHandler}
          data-testid="form-element"
        >
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
                required
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
                required
                ref={passwordRef}
                className="bg-white relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm ">
              <Link
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create Account
              </Link>
            </div>
            <div className="text-sm ">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
          {isError ? (
            <p className="text-red-500 flex justify-center">
              Email or Password is Incorrect!
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
