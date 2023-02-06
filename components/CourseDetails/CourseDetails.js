const CourseDetails = ({}) => {
  return (
    <>
      <div className="m-6 w-11/12">
        <h1 className="text-2xl text-mainText ml-12">Intro To Science</h1>
        <hr className=" mt-4 border-t border-gray-400" />
        <div className="flex ml-auto items-center justify-center p-2 mb-6 mt-4 bg-red-50 w-32">
          <button>+ Module</button>
        </div>
        <hr className="mb-6 border-t border-gray-400 " />
        <div className="flex gap-12 flex-1 w-11/12 m-auto">
          <aside className="w-32  flex h-72 bg-red-50 items-center justify-center">
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
