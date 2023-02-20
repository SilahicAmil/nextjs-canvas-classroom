import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-center w-screen h-screen bg-gradient-to-r from-sky-600 to-sky-300 items-center font-lato">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            {/* if logged in display this stuff ELSE just take back to "/" */}
            <Link
              href="/dashboard"
              className="px-6 py-2 text-lg font-bold tracking-widest text-black bg-blue-300"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

ErrorPage.displayName = "ErrorPage";

export default ErrorPage;
