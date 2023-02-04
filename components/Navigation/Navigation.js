import { AiOutlineDashboard, AiOutlineInbox } from "react-icons/ai";

import { Avatar } from "@boringer-avatars/react";
import { BsCalendarDate } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { VscLibrary } from "react-icons/vsc";
import { useRouter } from "next/router";

const Navigation = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex ">
        <div className="flex flex-col w-24 h-screen px-4 py-8 overflow-y-auto  bg-slate-500">
          <h2 className="text-md font-semibold justify-center items-center flex  text-blue-800">
            <Link href="">
              {/* need a better image for this or make it into an icon or something */}
              <Image
                src="/images/logo-color.png"
                alt="scholar logo"
                width={1000}
                height={1000}
              />
            </Link>
          </h2>

          <div className="flex flex-col justify-between mt-5">
            <aside>
              <ul>
                <li>
                  {/* this should open a drawer with info */}
                  <Link
                    href=""
                    className="flex flex-col items-center justify-center mb-5 py-2"
                  >
                    <Avatar
                      title={false}
                      size={40}
                      variant="beam"
                      name="testing"
                      square={false}
                      colors={[
                        "#FFAD08",
                        "#EDD75A",
                        "#73B06F",
                        "#0C8F8F",
                        "#405059",
                      ]}
                    />
                    <span>Account</span>
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="flex flex-col items-center py-2 text-gray-700 rounded-md "
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
