import { Avatar } from "@boringer-avatars/react";
import { CgBell } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const openAccountSettingsHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="h-24 w-[100vw] font-mono text-xl">
        <ul className="flex items-center justify-evenly h-full  ">
          <li>
            <div>
              <Image
                className="w-full h-full"
                alt="logo photo"
                src="/images/scholar-logo-no-bg.png"
                width={100}
                height={100}
              />
            </div>
          </li>
          <Link
            href="/"
            className={`${router.pathname === "/" ? "underline" : undefined}`}
          >
            <li>Dashboard</li>
          </Link>
          <li>Courses</li>
          <li>Calendar</li>
          <div className="flex gap-6 items-center">
            {/* onClick Account should show dropdown of like settings, help, and etc */}
            <li onClick={openAccountSettingsHandler}>
              <Avatar
                title={false}
                size={40}
                variant="beam"
                name="avatar"
                square={false}
                colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
              />
            </li>
            {isOpen ? (
              <div className="absolute  flex flex-col justify-center items-center gap-2 h-48 rounded-lg w-48 mt-64 z-10 bg-slate-200 ">
                <span className="hover:cursor-pointer rounded-md bg-red-50 p-2 w-48 flex justify-center">
                  Settings
                </span>
                <span className="hover:cursor-pointer rounded-md bg-red-50 p-2 w-48 flex justify-center">
                  Help
                </span>
                <span className="hover:cursor-pointer rounded-md bg-red-50 p-2 w-48 flex justify-center">
                  Logout
                </span>
              </div>
            ) : undefined}
            <li>
              <CgBell className="text-xl" />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
