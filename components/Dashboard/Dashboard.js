import DashboardCard from "./DashboardCard";
import { HiEllipsisVertical } from "react-icons/hi2";

const DUMMY_DATA = [
  {
    id: 1,
    courseName: "Intro to Science",
    courseLink: "intro-to-science",
    snippet: "Biology - 1st Semester",
    department: "Science",
  },
  {
    id: 2,
    courseName: "Calculus-403",
    courseLink: "calc-403",
    snippet: "Theoretical Calc. 1st Semester",
    department: "Math",
  },
  {
    id: 3,
    courseName: "Calculus-103",
    courseLink: "calc-103",
    snippet: "Intro Calc. 2nd Semester",
    department: "Math",
  },
];

const Dashboard = ({}) => {
  return (
    <>
      {/* dashboard title */}
      <div className="flex flex-col w-10/12 md:w-11/12 m-6 h-full">
        <div className="flex text-2xl mb-4">
          <h1 className="flex text-2xl">Dashboard</h1>
          <button className="ml-auto">
            <HiEllipsisVertical />
          </button>
        </div>
        <hr className="w-full" />

        {/* maybe xtract into own component idk */}
        <div className="m-6">
          <div className="mb-2">
            <h1 className="text-2xl">
              Published Courses ({DUMMY_DATA.length})
            </h1>
          </div>
          <hr className="w-11/12" />
          <div className="">
            <div className="lg:flex lg:flex-wrap lg:gap-4 md:grid md:grid-cols-2">
              {DUMMY_DATA.map((card) => {
                return (
                  <DashboardCard
                    key={card.id}
                    courseName={card.courseName}
                    snippet={card.snippet}
                    department={card.department}
                    courseLink={card.courseLink}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* unpublished courses - not sure how to handle this */}
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
