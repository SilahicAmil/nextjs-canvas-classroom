import { Avatar } from "@boringer-avatars/react";

const AccountDrawer = ({}) => {
  return (
    <>
      <div className="drawer">
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 z-50 h-full bg-slate-300 flex items-center">
            {/* <!-- Sidebar content here --> */}
            <div className="mb-10 bg-red-50 w-full h-1/6 rounded-md flex flex-col justify-center items-center gap-4">
              <Avatar
                size={40}
                variant="beam"
                name="account avatar"
                square={false}
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
              <p>Amil Silahic</p>
              <button>Logout</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountDrawer;
