import { BsCurrencyDollar } from "react-icons/bs";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdKeyboardArrowDown, MdManageAccounts } from "react-icons/md";

const Welcome = () => {
  return (
    <div className="flex justify-between bg-[#EFEFEF] px-10 py-3">
      <div>
        <h1 className="text-xs font-semibold">WELCOME TO SHOPTOWN ONLINE SHOPPING STORE.</h1>
      </div>
      <div className="flex divide-x">
        <div className="flex gap-1">
          <LiaFlagUsaSolid className="text-xl text-red-400"/>
          <p className="text-sm">LANGUAGE</p>
          <MdKeyboardArrowDown className="text-lg font-bold mr-2"/>
        </div>
        <div className="flex gap-1">
          <BsCurrencyDollar className="text-lg ml-2"/>
          <p className="text-sm">CURRENCY</p>
          <MdKeyboardArrowDown className="text-lg font-bold mr-2"/>
        </div>
        <div className="flex gap-1">
          <MdManageAccounts className="text-xl font-bold ml-2"/>
          <p className="text-sm">MY ACCOUNT</p>
          <MdKeyboardArrowDown className="text-lg font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
