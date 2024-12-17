import { BiMessageDetail } from "react-icons/bi";

const Subscribe = () => {
  return (
    <div>
      <div className="h-[17vh] bg-[#6DAC23] mt-16 flex justify-around">
        <div className="flex items-center w-[45%]">
          <div>
            <BiMessageDetail className="text-7xl text-white" />
          </div>
          <div className="text-2xl font-bold text-white ml-6">
            <h1>SUBSCRIBE TO THE NEWSLETTER</h1>
          </div>
        </div>
        <div className="w-[40%] flex gap-6 items-center justify-between bg-[#88C53F] px-10">
          <div className="w-full">
            <input
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className="w-full h-10 rounded-full px-4 font-semibold text-xs text-black"
              type="text"
            />
          </div>
          <div className="">
            <button className="bg-black text-white h-[40px] border-none w-20 font-bold rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
