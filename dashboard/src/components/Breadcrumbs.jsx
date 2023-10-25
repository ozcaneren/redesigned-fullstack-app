import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="bg-white border border-gray-200/70 w-full p-3 rounded" aria-label="Breadcrumb">
      <ol className="flex">
        {paths.map((path, index) => (
          <li className="font-medium mx-2 text-gray-900" key={index}>
            {index < paths.length - 1 ? (
              <>
                <Link
                  className="inline-flex items-center font-medium justify-center hover:text-zinc-600"
                  to={path.url}
                >
                  {path.label}
                  <span className="ml-4 text-gray-900">
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
