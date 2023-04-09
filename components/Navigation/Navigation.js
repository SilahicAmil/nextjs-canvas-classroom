import { AiOutlineDashboard, AiOutlineInbox } from "react-icons/ai";

import AccountDrawer from "../AccountDetails/AccountDrawer";
import { Avatar } from "@boringer-avatars/react";
import Image from "next/image";
import Link from "next/link";
import { VscLibrary } from "react-icons/vsc";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Navigation = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerOpenHandler = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex h-screen ">
        <div className="flex flex-col lg:w-24 tablet:w-16 xsm:w-14 px-4 py-8 bg-navbar font-lato">
          <h2 className="text-md font-semibold justify-center items-center flex">
            <Link href="/dashboard">
              {/* need a better image for this or make it into an icon or something */}
              <Image
                src="/images/logo-color.png"
                alt="Scholar Logo Color"
                width={1000}
                height={1000}
                priority
                className="rounded-md xsm:invisible lg:visible tablet:visible"
              />
            </Link>
          </h2>

          <div className="flex flex-col justify-between mt-5">
            <aside>
              <ul>
                <li>
                  <div
                    className="flex flex-col items-center justify-center mb-5 py-2 text-white hover:cursor-pointer"
                    onClick={drawerOpenHandler}
                  >
                    <Avatar
                      size={40}
                      variant="beam"
                      name={session}
                      square={false}
                      colors={[
                        "#92A1C6",
                        "#146A7C",
                        "#F0AB3D",
                        "#C271B4",
                        "#C20D90",
                      ]}
                    />
                    <span className="xsm:invisible lg:visible tablet:visible">
                      Account
                    </span>
                  </div>
                </li>

                <li>
                  <Link
                    className={`${
                      router.pathname === "/dashboard"
                        ? "border-b-2 border-white rounded-md"
                        : null
                    } text-white flex flex-col items-center py-2  w-full justify-center `}
                    href="/dashboard"
                  >
                    <AiOutlineDashboard className="text-4xl" />
                    <span className="text-md xsm:invisible lg:visible tablet:visible">
                      Dashboard
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      router.pathname === "/courses"
                        ? "border-b-2 border-white rounded-md"
                        : null
                    } flex flex-col items-center  py-2 mt-5 text-white `}
                    href="/courses"
                  >
                    <VscLibrary className="text-3xl " />
                    <span className="mx-4 xsm:invisible lg:visible tablet:visible">
                      Courses
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      router.pathname === "/inbox"
                        ? "border-b-2 border-white rounded-md "
                        : null
                    } flex flex-col items-center  py-2 mt-5 text-white`}
                    href="/inbox"
                  >
                    <AiOutlineInbox className="text-3xl" />
                    <span className="mx-4 xsm:invisible lg:visible tablet:visible">
                      Inbox
                    </span>
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        {openDrawer ? (
          <div className={`w-64 z-50 bg-blend-overlay`}>
            <AccountDrawer userData={session} />
          </div>
        ) : null}
        <div className="h-full overflow-y-auto  w-full z-50">{children}</div>
      </div>
    </>
  );
};

export default Navigation;
