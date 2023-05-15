const Loading = () => {
  // change loading spinner to react-loading-skeleton/spinner
  return (
    <div className="flex flex-col gap-8 h-full w-full  justify-center items-center">
      <div className="flex flex-col justify-center mt-48 items-center animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
        &gt;
      </div>
      Loading ...
    </div>
  );
};

export default Loading;
