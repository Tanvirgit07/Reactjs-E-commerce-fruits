import { BiMessageDetail } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { TiSocialGooglePlus, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      {/* footer email send            */}
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

      {/* shopTwon footer */}
      <div className="flex justify-between h-[15vh] mx-24 mt-10">
        <div className="w-[15%] flex items-center">
          <img src="https://i.ibb.co.com/XLqMVFf/rr.png" alt="" />
        </div>
        <div className="border-solid border-[1px] border-gray-200"></div>
        <div className="w-[55%] flex items-center">
          <h1 className="text-lg text-gray-5600 tracking-widest">
            There are many variations of passages of do not look even slightly
            believable. Various versions have evolved ation.
          </h1>
        </div>
        <div className="border-solid border-[1px] border-gray-200"></div>
        <div className="w-[18%] flex gap-4 items-center">
          <div className="bg-[#f6e9e9] w-10 h-10 flex justify-center items-center rounded-full">
            <FaFacebookF className="text-lg" />
          </div>
          <div className="bg-[#f6e9e9] w-10 h-10 flex justify-center items-center rounded-full">
            <TiSocialTwitter className="text-lg" />
          </div>
          <div className="bg-[#f6e9e9] w-10 h-10 flex justify-center items-center rounded-full">
            <TiSocialGooglePlus className="text-lg" />
          </div>
          <div className="bg-[#f6e9e9] w-10 h-10 flex justify-center items-center rounded-full">
            <FaLinkedinIn className="text-lg" />
          </div>
        </div>
      </div>

      {/* shoptown footer after divider */}
      <div className="border-solid border-[1px] border-green-600 mt-8"></div>

      {/* footer address */}
      <div>
        {/* address 1 */}
        <div>
          <div>
            <CiLocationOn />
            <h1>
              507-UTC, Beside Apple Hospital, <br />
              Ring Road, Surat
            </h1>
          </div>
          <div>
            <MdLocalPhone />
            <h1>(+91) 88 668 88222</h1>
          </div>
          <div>
            <BiMessageDetail />
            <h1>shoptownhelp@gmail.com</h1>
          </div>
        </div>

        {/* address 2 */}
        <div></div>
        {/* address 3 */}
        <div></div>
        {/* address 4 */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
