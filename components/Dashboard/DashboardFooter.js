import Link from "next/link";

const DashboadFooter = ({}) => {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex justify-between items-center ">
          <div className="gap-4 flex mr-4 ml-auto">
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
