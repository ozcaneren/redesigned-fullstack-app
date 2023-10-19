import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="bg-[#50577A] w-full p-3 rounded" aria-label="Breadcrumb">
      <ol className="flex">
        {paths.map((path, index) => (
          <li className="font-medium mx-2 text-white" key={index}>
            {index < paths.length - 1 ? (
              <>
                <Link
                  className="inline-flex items-center text-sm font-medium justify-center text-gray-300 hover:text-white"
                  to={path.url}
                >
                  {path.label}
                  <span className="ml-4 text-gray-300">
                    {">"}
                  </span>
                </Link>
              </>
            ) : (
              path.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
