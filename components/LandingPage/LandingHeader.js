import Image from "next/image";
import Link from "next/link";

const LandingHeader = ({}) => {
  return (
    <>
      <nav className="bg-[#003049] w-full sticky top-0 z-50 ">
        <div className=" h-24  flex justify-between items-center">
          <div className="font-bold text-2xl w-32 h-full flex items-center ml-8">
            <Image
              src="/images/scholar-logo-no-bg.png"
              alt="Scholar Logo"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex">
            <ul className="flex gap-12 uppercase text-white invisible lg:visible md:visible sm:visible ">
              <li>
                <Link href="#who-we-help" scroll={false}>
                  Who We Help
                </Link>
              </li>
              <li>
                <Link href="#pricing" scroll={false}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex">
              <li>
                <Link
                  className="w-32 flex items-center justify-center mr-4 uppercase font-bold bg-sky-300 h-full p-3 rounded-md text-black"
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
