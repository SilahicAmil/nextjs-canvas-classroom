const PricingCard = ({}) => {
  return (
    <div className="mb-6 lg:mb-0 ">
      <div className="block  rounded-lg shadow-lg bg-white h-full">
        <div className="  p-6 border-b border-gray-300 text-center">
          <p className="uppercase mb-4 text-2xl">
            <strong>Educator</strong>
          </p>
          <h3 className="text-md font-bold tracking-wide mb-6">
            <p>FREE</p>
          </h3>

          <button
            type="button"
            className="inline-block bg-sky-600 px-6 py-2.5 text-black uppercase tracking-wide font-bold w-full"
            data-mdb-ripple="true"
            data-ripple-color="primary"
          >
            Sign Up
          </button>
        </div>
        <div className="p-6">
          <ol className="list-inside">
            <li className="mb-4 flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check"
                className="text-green-600 w-4 h-4 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                ></path>
              </svg>
              Unlimited updates
            </li>
            <li className="mb-4 flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check"
                className="text-green-600 w-4 h-4 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                ></path>
              </svg>
              Git repository
            </li>
            <li className="mb-4 flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check"
                className="text-green-600 w-4 h-4 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                ></path>
              </svg>
              npm installation
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
