import { Outlet } from "react-router-dom";
import Welcome from "../shears/Welcome/Welcome";
import Navbar from "../shears/Navbar/Navbar";
import Search from "../Search/Search";

const Main = () => {
  return (
    <div>
      <div>
        <Welcome />
      </div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <Search />
      </div>
      <div className="bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
