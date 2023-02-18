import Image from "next/image";
import Link from "next/link";

const LandingHeader = ({}) => {
  return (
    <>
      <nav className="bg-[#003049] w-full ">
        <div className="container h-24  flex justify-between items-center">
          <div className="font-bold text-2xl w-32 h-full flex items-center ml-8">
            <Image
              src="/images/scholar-logo-no-bg.png"
              alt="Scholar Logo"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex">
            <ul className="flex gap-12 text-white">
              <li>
                <Link href="/dashboard">Features</Link>
              </li>
              <li>
                <Link href="/dashboard">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              <li>
                <Link
                  className="px-4 font-bold bg-sky-300 h-full p-3 rounded-md text-black"
                  href="/login"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingHeader;
