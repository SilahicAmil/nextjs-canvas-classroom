const DashboardCard = ({}) => {
  return (
    <>
      <div className="card w-72 h-72 bg-white shadow-xl mt-6 rounded-none">
        <div className="bg-red-500 w-full h-full flex">
          <button className="flex ml-auto text-2xl mr-2">:</button>
        </div>
        <div className="card-body w-full">
          <h2 className="card-title">
            Math 101
            <div className="badge badge-primary">Math</div>
          </h2>
          <div className="text-sm">
            <p className="">Advanced Calculus - 21/22</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
