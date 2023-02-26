import Link from "next/link";

const DashboadFooter = ({}) => {
  return (
    <>
      <div className="h-10 w-full bg-navbar flex ">
        <div className="flex ml-auto justify-between items-center ">
          <div className="gap-4 flex mr-4 ml-auto text-white">
            <span>Privacy Policy</span>
            <Link href="https://github.com/silahicamil" target="_blank">
              Github
            </Link>
            <Link href="https://amil.dev" target="_blank">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboadFooter;
