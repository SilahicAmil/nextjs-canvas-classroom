import Image from "next/image";
import Link from "next/link";

const LandingHeader = ({}) => {
  return (
    <>
      <nav className="w-full ">
        <div className=" h-24  flex justify-between items-center">
          <div className="font-bold text-2xl w-32 h-full flex items-center ml-8">
            <Image
              src="/images/scholar-logo-no-bg.png"
              alt="Scholar Logo"
              width={1000}
              height={1000}
            />
          </div>
          <div className="">
            <ul className="flex">
              <li>
                <Link
                  className="w-32 flex items-center justify-center mr-4 uppercase font-bold bg-[#171100] h-full p-3 rounded-sm text-white hover:rounded-2xl hover:duration-200"
                  href="/login"
                >
                  Log In
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
