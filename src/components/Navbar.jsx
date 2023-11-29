import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-10 bg-blue-400 text-white px-10 py-5 text-xl text-gray-100 ">
        <li>
          <Link className="hover:text-gray-700" to="/">
            Add task
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-700" to="/task-list">
            Task List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
