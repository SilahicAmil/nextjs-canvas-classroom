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
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <a>Courses</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Dashboard</a>
              </li>
              <li>
                <a>Calendar</a>
              </li>
            </ul>
          </div>
          <Link href="">
            <Image
              alt="scholar logo"
              src="/images/scholar-logo-no-bg.png"
              height={100}
              width={100}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal px-1">
            <li>
              <a>Courses</a>
            </li>
            <li tabIndex={0}>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Calendar</a>
            </li>
          </ul>
        </div>
        <div className="flex-none navbar-end navbar">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Notifications</span>
                <span className="text-info">
                  Math 101: Turn in Assignment 12
                </span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
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
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
