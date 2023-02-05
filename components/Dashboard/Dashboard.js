import DashboadFooter from "./DashboardFooter";

const Dashboard = ({}) => {
  return (
    <>
      <div className="flex flex-col w-9/12 m-6 h-full">
        <div className="flex text-2xl mb-4">
          <h1 className="flex text-2xl">Dashboard</h1>
          <button className="ml-auto">:</button>
        </div>
        <hr className="w-full " />

        <div className="m-6">
          <div className="mb-2">
            <h1 className="text-2xl">Published Courses (1)</h1>
          </div>
          <hr className="w-11/12" />
          <div>
            <h1>Card Component Here</h1>
          </div>
        </div>
      </div>
      <DashboadFooter />
    </>
  );
};

export default Dashboard;
