import Link from "next/link";
const LandingFooter = () => {
  return (
    <div className="h-16 items-center flex bg-gray-700 ">
      <h1 className="text-white text-xl ml-12 invisible lg:visible">Scholar</h1>
      <ul className="ml-auto mr-12 flex gap-12 ">
        <li>
          <Link
            href="https://github.com/silahicamil"
            className="text-xl text-white"
          >
            Github
          </Link>
        </li>
        <li>
          <Link href="https://amil.dev" className="text-xl  text-white">
            Website
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingFooter;
