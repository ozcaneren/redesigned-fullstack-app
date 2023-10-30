import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <main className="flex-1 h-full overflow-x-hidden overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </>
  );
}
