import { Avatar } from "@boringer-avatars/react";
import { CgBell } from "react-icons/cg";
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
      <nav className="h-16 w-[100vw] font-mono text-xl">
        <ul className="flex items-center justify-evenly h-full w-full ">
          <li>
            <div>
              <h1>SCHOLAR</h1>
            </div>
          </li>
          <Link
            href="/"
            className={`${router.pathname === "/" ? "underline" : undefined}`}
          >
            <li>Dashboard</li>
          </Link>
          <li>Calendar</li>
          <div className="flex gap-6 items-center">
            {/* onClick Account should show dropdown of like settings, help, and etc */}
            <li onClick={openAccountSettingsHandler}>
              <Avatar
                title={false}
                size={40}
                variant="beam"
                name="testing"
                square={false}
                colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
              />
            </li>
            {isOpen ? (
              <div className="absolute flex flex-col justify-center items-center gap-4 h-48 rounded-lg w-48 mt-64 z-10 bg-slate-200">
                <li>Settings</li>
                <li>Help</li>
                <li>Logout</li>
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
