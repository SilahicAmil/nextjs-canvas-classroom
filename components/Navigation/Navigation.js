import { AiOutlineDashboard, AiOutlineInbox } from "react-icons/ai";

import { Avatar } from "@boringer-avatars/react";
import { BsCalendarDate } from "react-icons/bs";
import Link from "next/link";
import { VscLibrary } from "react-icons/vsc";
import { useRouter } from "next/router";

const Navigation = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-32 h-screen px-4 py-8 overflow-y-auto border-r">
          <h2 className="text-md font-semibold justify-center items-center flex flex-col text-blue-800">
            {/* this should open a drawer with info */}
            <Avatar
              title={false}
              size={40}
              variant="beam"
              name="testing"
              square={false}
              colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
            />
            Account
          </h2>

          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <li className="">
                  <Link
                    className="flex flex-col items-center py-2 text-gray-700rounded-md "
                    href="/"
                  >
                    <AiOutlineDashboard className="text-3xl" />
                    <span className=" text-md text-blue-800">Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex flex-col items-center  py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <VscLibrary className="text-3xl text-black" />
                    <span className="mx-4 text-blue-800">Courses</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col items-center  py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <BsCalendarDate className="text-3xl text-black" />
                    <span className="mx-4 text-blue-800">Calendar</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col items-center  py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <AiOutlineInbox className="text-3xl text-black" />
                    <span className="mx-4 text-blue-800">Inbox</span>
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className=" m-8 h-full overflow-y-auto">
          <div className="flex items-center justify-center ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
