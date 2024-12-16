import { CiDeliveryTruck } from "react-icons/ci";
import SwiperHome from "../../Components/Swiper/SwiperHome";
import { MdOutlineSavings } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import Product from "../../Components/Products/Product";
import { useState } from "react";
import Swiper_two from "../../Components/Swiper_two/Swiper_two";
import Swiper_three from "../../Components/Swiper_three/Swiper_three";
import Top_left from "../../Components/Top_left/Top_left";
import Shop_dash from "../../Components/Shop/Shop_dash";
import Shop_left from "../../Components/Shop_dash/Shop_left";
import Fruit from "../../Components/Fruit/Fruit";
import Swiper_four from "../../Components/Swiper_four/Swiper_four";
import Banner from "../../Components/Banner/Banner";
import Swiper_five from "../../Components/Swiper_five/Swiper_five";
import Latest from "../../Components/Latest/Latest";

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
        {/* top_left */}
        <div className="w-[22%] ml-10">
          <Top_left />
          <Shop_left/>
          <Fruit/>
          <Latest/>
        </div>

        {/* top products */}
        <div className="w-[72%]">
          <div>
            <div className="flex justify-between items-center mb-4 mt-2">
              <div>
                <h1 className="text-2xl">TOP PRODUCTS</h1>
              </div>
              <div className="tabs flex justify-end pb-3 mr-5">
                <button
                  className={`tab ${
                    activeTab === 1
                      ? "tab-active border-b-2 border--600  text-red-500"
                      : "text-green-500"
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  LATEST
                </button>
                <button
                  className={`tab ${
                    activeTab === 2
                      ? "tab-active border-b-2 border-red-600 text-red-500"
                      : "text-green-500"
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  SPECIAL
                </button>
                <button
                  className={`tab ${
                    activeTab === 3
                      ? "tab-active border-b-2 border-red-600  text-red-500"
                      : " text-green-500"
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  BESTSELLER
                </button>
              </div>
            </div>
          </div>

          <div className="">
            {activeTab === 1 && <Product />}
            {activeTab === 2 && (
              <div>
                <Swiper_two />
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <Swiper_three />
              </div>
            )}
          </div>

          {/* Hero Home */}
          <div className="flex justify-between mt-16">
            <div className="w-[49%] h-[45vh]">
              <div className="bg-[url('https://i.ibb.co.com/HzFTndB/s2.jpg')] h-full w-full bg-cover bg-center">
                <div className="flex justify-end">
                  <div className="mt-14 mr-10">
                    <h1 className="text-3xl font-bold tracking-[0.2rem]">
                      VEGETABLE
                    </h1>
                    <h1 className="text-base tracking-[0.1rem] ml-1 mt-1">
                      FRESH & HEALTHY
                    </h1>
                    <h1 className="mt-2 ml-1 text-lg bg-red-600 text-white inline-block px-3 py-1 font-bold">
                      40% OFF
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[49%] h-[45vh]">
              <div className="bg-[url('https://i.ibb.co.com/F8wb5h6/s3.jpg')] h-full w-full bg-cover bg-center">
                <div className="flex justify-start">
                  <div className="mt-14 ml-10">
                    <h1 className="text-3xl font-bold tracking-[0.2rem]">
                      ORGANIC
                    </h1>
                    <h1 className="text-sm tracking-[0.1rem] ml-1 mt-1">
                      & ALL NATURAL VEGETABLE
                    </h1>
                    <h1 className="mt-2 ml-1 text-lg bg-red-600 text-white inline-block px-3 py-1 font-bold">
                      40% OFF
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* shop_dash */}

          <div>
            <Shop_dash/>
          </div>

          {/* featured sections */}
            <div className="mt-20">
              <h1 className="text-2xl mb-5">FEATURED</h1>
              <Swiper_four/>
            </div>

            {/* banner */}
            <div>
              <Banner/>
            </div>

            {/* big swiper five */}
            <div>
              <h1 className="text-2xl mb-6">LATEST BLOGS</h1>
              <Swiper_five/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
