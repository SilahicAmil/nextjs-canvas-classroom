import DashboardCard from "./DashboardCard";

const Dashboard = ({}) => {
  return (
    <>
      {/* dashboard title */}
      <div className="flex flex-col w-10/12 m-6 h-full">
        <div className="flex text-2xl mb-4">
          <h1 className="flex text-2xl">Dashboard</h1>
          <button className="ml-auto">:</button>
        </div>
        <hr className="w-full" />

        {/* maybe xtract into own component idk */}
        <div className="m-6">
          <div className="mb-2">
            <h1 className="text-2xl">Published Courses (1)</h1>
          </div>
          <hr className="w-11/12" />
          <div>
            <DashboardCard />
          </div>
        </div>

        {/* unpublished courses */}
        <div className="m-6">
          <div className="mb-2">
            <h1 className="text-2xl">Unpublished Courses (1)</h1>
          </div>
          <hr className="w-11/12" />
          <div>
            <DashboardCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
