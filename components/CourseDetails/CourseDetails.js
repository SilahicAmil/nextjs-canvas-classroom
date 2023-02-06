const CourseDetails = ({}) => {
  return (
    <>
      <div className="m-6 w-11/12">
        <h1 className="text-2xl text-mainText ml-12">Intro To Science</h1>
        <hr className=" mt-4 border-t border-gray-400" />
        <div className="flex ml-auto items-center justify-center p-2 mb-8 mt-6 bg-red-50 w-32">
          <button>+ Module</button>
        </div>
        <div className="flex gap-8 flex-1 w-10/12">
          <aside>
            <nav className="w-32 gap-4 flex h-full bg-red-50 items-center justify-center">
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
          <div className=" flex-1 bg-red-500 h-32">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
