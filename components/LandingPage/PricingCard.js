import { FcCheckmark } from "react-icons/fc";

const PricingCard = ({ name, pricing, features }) => {
  return (
    <div className="mb-6 lg:mb-0 ">
      <div className="block  rounded-lg shadow-lg bg-white h-full">
        <div className="p-6 border-b border-gray-300 text-center">
          <p className="uppercase mb-4 text-2xl">
            <strong>{name}</strong>
          </p>
          <h3 className="text-md font-bold uppercase tracking-wide mb-6">
            <p>{pricing}</p>
          </h3>

          <button
            type="button"
            className="inline-block bg-sky-600 px-6 py-2 text-black uppercase tracking-wide font-bold w-full"
            data-mdb-ripple="true"
            data-ripple-color="primary"
          >
            Sign Up
          </button>
        </div>
        <div className="p-6">
          <ol className="list-inside">
            {features.map((tags) => {
              return (
                <li className="mb-4 gap-2 flex items-center" key={tags}>
                  <FcCheckmark />
                  {tags}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
