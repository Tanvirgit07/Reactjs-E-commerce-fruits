import { CiDeliveryTruck } from "react-icons/ci";
import SwiperHome from "../../Components/Swiper/SwiperHome";
import { MdOutlineSavings } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";

const Home = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/BnmwTPP/wood.jpg')]">
      <div className="flex justify-between bg-cover bg-center">
        <div className="w-[21%] h-[65vh]"></div>
        <div className="w-[50%] h-[65vh] mt-8">
          <SwiperHome />
        </div>
        <div className="w-[20%] mt-8 mr-8">
          <div className="">
            <img
              className="w-full h-44 bg-cover object-fill"
              src="https://i.ibb.co.com/Mf7tqp1/sid1.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full h-44 mt-10 bg-cover object-fill"
              src="https://i.ibb.co.com/gDJqKWX/sid2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-10">
        <div className="flex gap-3 items-center">
          <div>
            <CiDeliveryTruck className="text-6xl" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Free world delivery</h1>
            <p className="text-lg">Order over $100</p>
          </div>
        </div>
        <div className="border-l border-red-300 mx-4"></div> {/* Divider */}
        <div className="flex gap-3 items-center">
          <div>
            <MdOutlineSavings className="text-6xl" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">win $100 to shop</h1>
            <p className="text-lg">Enter now</p>
          </div>
        </div>
        <div className="border-l border-red-300 mx-4"></div> {/* Divider */}
        <div className="flex gap-3 items-center">
          <div>
            <BiSupport className="text-5xl" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Best online support</h1>
            <p className="text-lg">Hours : 8am - 11pm</p>
          </div>
        </div>
        <div className="border-l border-red-300 mx-4"></div> {/* Divider */}
        <div className="flex gap-3 items-center">
          <div>
            <TbMoneybag className="text-5xl" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Money Back guarantee</h1>
            <p className="text-lg">With a 30 day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
