const CoursesModalContent = ({ children }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col font-lato">
        <div className="flex justify-center items-center h-12">
          <h1 className="text-2xl font-semibold">Course Creation</h1>
        </div>
        <form>
          <div>
            <label htmlFor="name">Course Name</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="tag">Course Tag</label>
            <select id="tag">
              <option value="null">Select From Dropdown</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="English">Computer Science</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" cols="30" rows="5" />
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
        {children}
      </div>
    </>
  );
};

export default CoursesModalContent;
