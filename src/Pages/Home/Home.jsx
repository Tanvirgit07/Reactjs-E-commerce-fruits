import { CiDeliveryTruck } from "react-icons/ci";
import SwiperHome from "../../Components/Swiper/SwiperHome";
import { MdOutlineSavings } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import Product from "../../Components/Products/Product";
import { useState } from "react";
import Swiper_two from "../../Components/Swiper_two/Swiper_two";
import Swiper_three from "../../Components/Swiper_three/Swiper_three";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co.com/BnmwTPP/wood.jpg')]">
        <div className="flex justify-between bg-cover bg-center">
          <div className="w-[21%] h-[65vh]"></div>
          <div className="w-[50%] h-[65vh] mt-8">
            <SwiperHome />
          </div>
          <div className="w-[20%] mt-8 mr-8">
            <div>
              <img
                className="w-full h-44 bg-cover object-fill"
                src="https://i.ibb.co.com/Mf7tqp1/sid1.jpg"
                alt=""
              />
            </div>
            <div>
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
            <CiDeliveryTruck className="text-6xl" />
            <div>
              <h1 className="text-lg font-semibold">Free world delivery</h1>
              <p className="text-lg">Order over $100</p>
            </div>
          </div>
          <div className="border-l border-red-300 mx-4"></div>
          <div className="flex gap-3 items-center">
            <MdOutlineSavings className="text-6xl" />
            <div>
              <h1 className="text-lg font-semibold">Win $100 to shop</h1>
              <p className="text-lg">Enter now</p>
            </div>
          </div>
          <div className="border-l border-red-300 mx-4"></div>
          <div className="flex gap-3 items-center">
            <BiSupport className="text-5xl" />
            <div>
              <h1 className="text-lg font-semibold">Best online support</h1>
              <p className="text-lg">Hours: 8am - 11pm</p>
            </div>
          </div>
          <div className="border-l border-red-300 mx-4"></div>
          <div className="flex gap-3 items-center">
            <TbMoneybag className="text-5xl" />
            <div>
              <h1 className="text-lg font-semibold">Money Back guarantee</h1>
              <p className="text-lg">With a 30-day policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-20">
        <div className="border-solid border-2 border-red-600 w-[25%] ml-10"></div>
        <div className="w-[70%]">
          <div>
            <div className="flex justify-between items-center mb-4 mt-2">
              <div>
                <h1 className="text-2xl">TOP PRODUCTS</h1>
              </div>
              <div className="tabs flex justify-end pb-3">
                <button
                  className={`tab ${activeTab === 1 ? "tab-active border-b-2 border--600  text-red-500" : "text-green-500"}`}
                  onClick={() => setActiveTab(1)}
                >
                  LATEST
                </button>
                <button
                  className={`tab ${activeTab === 2 ? "tab-active border-b-2 border-red-600 text-red-500" : "text-green-500"}`}
                  onClick={() => setActiveTab(2)}
                >
                  SPECIAL
                </button>
                <button
                  className={`tab ${activeTab === 3 ? "tab-active border-b-2 border-red-600  text-red-500" : " text-green-500"}`}
                  onClick={() => setActiveTab(3)}
                >
                  BESTSELLER
                </button>
              </div>
            </div>
          </div>

          <div className="">
            {activeTab === 1 && <Product />}
            {activeTab === 2 && <div><Swiper_two/></div>}
            {activeTab === 3 && <div><Swiper_three/></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
