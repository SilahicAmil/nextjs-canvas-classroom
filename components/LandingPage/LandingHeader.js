import Image from "next/image";

const LandingHeader = ({}) => {
  return (
    <>
      <nav className="bg-slate-400 w-full">
        <div class="container h-24  flex justify-between items-center">
          <div class="font-bold text-2xl">
            <Image
              src="/images/logo-color.png"
              alt="Scholar Logo Image"
              width={128}
              height={128}
              className="h-full w-full ml-4 rounded-full"
            />
          </div>
          <div class="block lg:hidden"></div>
          <div class="hidden lg:block">
            <ul class="inline-flex">
              <li>
                <button
                  class="px-4 font-bold bg-sky-300 h-full p-3 rounded-md"
                  href="/"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingHeader;
