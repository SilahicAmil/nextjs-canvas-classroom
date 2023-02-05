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
      <div className="flex">
        <div className="flex flex-col w-24 h-screen px-4 py-8  bg-slate-500">
          <h2 className="text-md font-semibold justify-center items-center flex">
            <Link href="">
              {/* need a better image for this or make it into an icon or something */}
              <Image
                src="/images/logo-color.png"
                alt="scholar logo"
                width={1000}
                height={1000}
                className="rounded-md"
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
                    className="flex flex-col items-center justify-center mb-5 py-2 text-white"
                  >
                    <Avatar
                      size={40}
                      variant="beam"
                      name="account avatar"
                      square={false}
                      colors={[
                        "#92A1C6",
                        "#146A7C",
                        "#F0AB3D",
                        "#C271B4",
                        "#C20D90",
                      ]}
                    />
                    <span>Account</span>
                  </Link>
                </li>
                <li className={``}>
                  <Link
                    className={`${
                      router.pathname === "/" ? "text-black" : "text-white"
                    } flex flex-col items-center py-2  w-full justify-center`}
                    href="/"
                  >
                    <AiOutlineDashboard className="text-4xl" />
                    <span className="text-md">Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex flex-col items-center  py-2 mt-5 text-white rounded-md"
                    href="#"
                  >
                    <VscLibrary className="text-3xl " />
                    <span className="mx-4 ">Courses</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col items-center  py-2 mt-5 text-white rounded-md"
                    href="#"
                  >
                    <BsCalendarDate className="text-3xl " />
                    <span className="mx-4 ">Calendar</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col items-center  py-2 mt-5 text-white rounded-md "
                    href="#"
                  >
                    <AiOutlineInbox className="text-3xl " />
                    <span className="mx-4 ">Inbox</span>
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <div className="h-full overflow-y-auto  w-full">{children}</div>
        {/* render the aside component here */}
      </div>
    </>
  );
};

export default Navigation;
