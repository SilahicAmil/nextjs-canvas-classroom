import { Avatar } from "@boringer-avatars/react";
import { CgBell } from "react-icons/cg";

const Navigation = () => {
  return (
    <nav className="h-16 w-[100vw] font-mono text-xl">
      <ul className="flex items-center justify-evenly h-full w-full ">
        <li>
          <div>
            <h1>SCHOLAR</h1>
          </div>
        </li>
        <li>Dashboard</li>
        <li>Calendar</li>
        <div className="flex gap-6 items-center">
          {/* onClick Account should show dropdown of like settings, help, and etc */}
          <li>
            <Avatar
              title={false}
              size={40}
              variant="beam"
              name="testing"
              square={false}
              colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
            />
          </li>
          <li>
            <CgBell className="text-xl" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
