// import SwiperHome from "../../Components/Swiper/SwiperHome";

import SwiperHome from "../../Components/Swiper/SwiperHome";

const Home = () => {
  return (
    <div className="flex justify-between bg-[url('https://i.ibb.co.com/BnmwTPP/wood.jpg')] bg-cover bg-center">
        <div className="w-[21%]">

        </div>
      <div className="border-solid border-2 border-indigo-600 w-[50%] h-[65vh] mt-8">
        <SwiperHome/>
      </div>
      <div className="border-solid border-2 border-red-600 w-[20%] mt-8 mr-8">
        <div className="border-solid border-2 border-indigo-600">

        </div>
        <div className="border-solid border-2 border-indigo-600">

        </div>
      </div>
    </div>
  );
};

export default Home;
