import Header from "../Header/Header";

const CourseDetails = ({}) => {
  return (
    <>
      <div className="m-8 w-11/12">
        <div className="ml-12">
          <Header>Intro to Science</Header>
        </div>
        <hr className=" mt-4 border-t border-gray-400" />

        <div className="flex ml-auto items-center justify-center gap-8  mb-6 mt-4 w-1/3">
          <button className="bg-red-500 w-32 p-2 rounded-lg">+ Module</button>
          <button className="bg-red-500 w-32 p-2 rounded-lg">+ Module</button>
          <button className="bg-red-500 w-32 p-2 rounded-lg">+ Module</button>
        </div>
        <hr className="mb-6 border-t border-gray-400 " />
        <div className="flex gap-12 flex-1 w-11/12 m-auto">
          <aside className="w-32 flex h-72 bg-red-50 items-center justify-center">
            <nav className="">
              <ul>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
              </ul>
            </nav>
          </aside>
          <div className=" flex-1 bg-red-500 h-96">
            <h1>Hello</h1>
          </div>
          <div className="flex bg-red-300 w-64">Hi</div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
