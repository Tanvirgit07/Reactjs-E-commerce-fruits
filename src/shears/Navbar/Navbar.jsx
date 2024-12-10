import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="flex justify-between items-center bg-[#FFFFFF] px-10 py-5 w-full">
      <div>
        <img src="https://i.ibb.co.com/j80x2Gr/logo.png" alt="shop_logo" />
      </div>


      <div className="flex items-center divide-x gap-4">
        <div className="flex gap-10 text-sm font-bold">
          <Link to='/'>HOME</Link>

          <Link to='/brand'>BRANDS</Link>

          <Link>CONTACT US</Link>

          <Link>SPECIALS</Link>

          <Link>BLOGS</Link>

        </div>

        <div className="flex gap-2 ml-3">

          <div className="ml-4">
            
            <img src="https://i.ibb.co.com/Z25JXmd/phn.png" alt="phn image" />
          </div>
          <div>
            <p className="font-bold">FREE CALL US</p>
            <p className="font-semibold">(+880) 1911662898</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
