import { BiCommentDetail } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { IoIosUnlock } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";

const Top_left = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-5 bg-[#F2F2F2] px-2 py-5 mb-2">
        <div>
          <IoWalletSharp  className="text-7xl font-bold text-[#F4BCC6]"/>
        </div>
        <div>
          <h1 className="text-base leading-[1.7] tracking-[0.2rem] font-semibold">USE WALLET</h1>
          <p className="tracking-[0.2rem]">Pay for payments</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 bg-[#FFFFFF] px-2 py-5 mb-3">
        <div>
          <BiCommentDetail  className="text-7xl font-bold text-[#EFEFEF]"/>
        </div>
        <div>
          <h1 className="text-base leading-[1.7] tracking-[0.2rem] font-semibold">USE WALLET</h1>
          <p className="tracking-[0.2rem]">Pay for payments</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 bg-[#F2F2F2] px-2 py-5 mb-3">
        <div>
          <FaShoppingBag   className="text-7xl text-[#E8B87E]"/>
        </div>
        <div>
          <h1 className="text-base leading-[1.7] tracking-[0.2rem] font-semibold">USE WALLET</h1>
          <p className="tracking-[0.2rem]">Pay for payments</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 bg-[#FFFFFF] px-2 py-5 mb-3">
        <div>
          <GrDeliver  className="text-7xl text-[#F4BCC6]"/>
        </div>
        <div>
          <h1 className="text-base leading-[1.7] tracking-[0.2rem] font-semibold">USE WALLET</h1>
          <p className="tracking-[0.2rem]">Pay for payments</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 bg-[#F2F2F2] px-2 py-5">
        <div>
          <IoIosUnlock  className="text-7xl text-[#FFCC3F]"/>
        </div>
        <div>
          <h1 className="text-base leading-[1.7] tracking-[0.2rem] font-semibold">USE WALLET</h1>
          <p className="tracking-[0.2rem]">Pay for payments</p>
        </div>
      </div>
    </div>
  );
};

export default Top_left;
