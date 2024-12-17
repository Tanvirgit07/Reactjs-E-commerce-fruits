import { FaHome } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import Shop_left from "../../Components/Shop_dash/Shop_left";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[25%]">
            <div className="w-[90%] mx-auto h-[45vh]">
                <Shop_left/>
            </div>
            <div className="w-[90%] mx-auto h-[50vh] border rounded-md">
                <img className="w-full h-full object-contain bg-cover rounded-md" src="https://i.ibb.co.com/PWc8Xd7/g17.gif" alt="" />
            </div>
            <div className="w-[90%] mx-auto h-[30vh] mt-10 border">
                <img className="w-full h-full bg-cover object-cover" src="https://i.ibb.co.com/jVZWWMv/g15.webp" alt="" />
            </div>
        </div>
        <div className="w-[72%]">
          <div className="flex justify-between w-[95%] mt-7">
            <div>
              <h1 className="text-xl mb-5 tracking-widest font-semibold">
                CONTACT US
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <FaHome />
              <MdKeyboardDoubleArrowRight />
              <h1>Brand</h1>
            </div>
          </div>

          <p className="tracking-widest font-semibold">Our Location</p>
          <div className="border px-10 py-8 mt-3 w-[95%]">
            <div className="flex gap-2 mb-4">
              <div>
                <IoHome className="text-xl" />
              </div>
              <div>
                <h1 className="tracking-widest text-lg mb-1">Your Store</h1>
                <p className="tracking-widest">507-UTC,Udhana Darvaja Sura</p>
                <p className="tracking-widest mt-1">
                  Email : ahmmedtanvir9090@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <div>
                <RxMobile className="text-xl" />
              </div>
              <div>
                <h1 className="tracking-widest text-lg mb-1">Your Store</h1>
                <p className="tracking-widest">507-UTC,Udhana Darvaja Sura</p>
                <p className="tracking-widest mt-1">
                  Email : ahmmedtanvir9090@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <LiaFaxSolid className="text-xl" />
              </div>
              <div>
                <h1 className="tracking-widest text-lg mb-1">Your Store</h1>
                <p className="tracking-widest">507-UTC,Udhana Darvaja Sura</p>
                <p className="tracking-widest mt-1">
                  Email : ahmmedtanvir9090@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* email address */}
          <div className="mt-5">
            <h1 className="text-lg tracking-widest mb-5">Contact Form</h1>
            <div className="w-[95%] space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-[15%]">
                  <span className="tracking-wider">Your Name</span>
                </div>
                <div className="w-[80%]">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="h-9 w-full border px-4"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-[15%]">
                  <span className="tracking-wider">E-Mail Address</span>
                </div>
                <div className="w-[80%]">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="border px-4 h-9 w-full"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[15%]">
                  <span className="tracking-wider">Enquiry</span>
                </div>
                <div className="w-[80%]">
                  <textarea
                    placeholder="Bio"
                    className="text-sm h-52 border px-4 py-4 w-full"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="font-bold bg-[#F0F0F0] px-4 py-2 rounded-full tracking-widest mt-10">Submit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
