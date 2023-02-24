import DashboardCard from "./DashboardCard";
import Header from "../Header/Header";
import { HiEllipsisVertical } from "react-icons/hi2";

const Dashboard = ({ courseData }) => {
  return (
    <>
      {/* dashboard title */}
      <div className="flex flex-col w-10/12 md:w-11/12 m-6 h-full">
        <div className="flex text-2xl mb-4">
          <Header>Dashboard</Header>
          <button className="ml-auto">
            <HiEllipsisVertical />
          </button>
        </div>
        <hr className="w-full" />

        {/* maybe xtract into own component idk */}
        <div className="m-6">
          <div className="mb-2">
            <h1 className="text-2xl">
              Published Courses ({courseData.length})
            </h1>
          </div>
          <hr className="w-11/12" />
          <div className="">
            <div className="lg:flex lg:flex-wrap lg:gap-4 md:grid md:grid-cols-2">
              {courseData.map((card) => {
                return (
                  <DashboardCard
                    key={card.courseId}
                    courseName={card.courseName}
                    description={card.description}
                    tag={card.tag}
                    // course link will be courseName also but to lowercase (maybe)
                    courseLink={card.courseName}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* unpublished courses - not sure how to handle this -
         Might just get rid of this idk */}
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
