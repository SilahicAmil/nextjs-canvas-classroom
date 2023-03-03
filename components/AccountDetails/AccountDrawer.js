import { Avatar } from "@boringer-avatars/react";
import { signOut } from "next-auth/react";

const AccountDrawer = ({ userData }) => {
  const logoutHandler = () => {
    signOut();
  };

  return (
    <>
      <div className="drawer font-lato">
        <div className="drawer-side">
          <ul className="menu p-4 z-50 h-full bg-slate-600 flex items-center">
            <div className="mb-10 bg-red-50 w-full h-1/6 rounded-md flex flex-col justify-center items-center gap-4">
              <Avatar
                size={40}
                variant="beam"
                name={userData}
                square={false}
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />

              <p>{userData.user.email}</p>
              <button type="button" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountDrawer;
