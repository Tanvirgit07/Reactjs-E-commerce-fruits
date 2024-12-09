import { Outlet } from "react-router-dom";
import Welcome from "../shears/Welcome/Welcome";
import Navbar from "../shears/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div>
        <Welcome />
      </div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
