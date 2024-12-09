const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#FFFFFF] my-8">
      <div>
        <img src="https://i.ibb.co.com/j80x2Gr/logo.png" alt="shop_logo" />
      </div>

      <div className="flex items-center divide-x gap-4">
        <div className="flex gap-10 text-sm font-bold">
          <h1>HOME</h1>
          <h1>BRANDS</h1>
          <h1>CONTACT US</h1>
          <h1>SPECIALS</h1>
          <h1>BLOGS</h1>
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
