const CoursesModalContent = ({ children }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <h1>Course Creation</h1>
        <form>
          <div>
            <label htmlFor="name">Course Name</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="tag">Tag(s)</label>
            <select id="tag">
              <option value="Math">Select From Dropdown</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
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
