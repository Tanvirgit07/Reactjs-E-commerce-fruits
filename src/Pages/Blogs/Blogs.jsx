import { FaHome, FaRegComment } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[25%]">
        <div>
        {/* <div className="h-[40vh] w-[60%] mx-auto mt-10 mb-40 border">
              <img className="w-full h-full object-cover" src="https://i.ibb.co.com/sCfMyY0/q1.gif" alt="" />
          </div> */}
          <div className="mt-8 w-[85%] mx-auto">
            <div className="w-[70%] mx-auto">
              <h1 className="text-xl border-b-2 font-semibold border-green-500">
                ACCOUNT
              </h1>
              <div className="space-y-2 text-base mt-4">
                <h1>Login</h1>
                <h1>Register</h1>
                <h1>Forgotten Password</h1>
                <h1>Address Book</h1>
                <h1>Wish List</h1>
                <h1>Downloads</h1>
                <h1>Recurring payments</h1>
                <h1>Reward Points</h1>
                <h1>Returns</h1>
                <h1>Transactions</h1>
                <h1>Newsletter</h1>
              </div>
            </div>
          </div>
          <div className="h-[40vh] w-[60%] mx-auto mt-20 border">
              <img className="w-full h-full object-cover" src="https://i.ibb.co.com/sCfMyY0/q1.gif" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[72%]">
        <div className="flex justify-between mb-5 w-[97%] mt-7">
          <div>
            <h1 className="text-xl tracking-widest font-semibold">
              CONTACT US
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <FaHome />
            <MdKeyboardDoubleArrowRight />
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 w-[98%] mb-10">
          <div className="relative">
            <div className="border-solid border-2 border-indigo-600 w-full h-[65vh]">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://i.ibb.co.com/D1D1pPp/s6.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1 className="text-lg bg-[#62911F] text-white px-3 py-2">
                26 August, 2016
              </h1>
            </div>
          </div>

          <div className="px-6 pb-4">
            <h1 className="text-lg tracking-widest mt-7 mb-1">
              Nostrum Iesum Christum cupidatat
            </h1>
            <div className="border-solid border-[2px] border-green-600"></div>
            <div className="mt-8">
              <h1 className="tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                et laboriosam possimus neque, eum voluptas magnam incidunt
                adipisci repellendus. Consectetur eaque officia officiis earum
                consequuntur aliquam libero perferendis sint excepturi animi
                repellendus similique quas dolorem enim at, deleniti quisquam
                rerum voluptas voluptatum magnam. Nobis temporibus incidunt
                commodi? Corporis necessitatibus magni maxime id eaque facere
                quam itaque iste sequi quod deserunt eum nisi quis delectus
                nihil ducimus, temporibus mollitia nesciunt, excepturi eligendi!
                Nostrum molestias accusantium doloremque voluptatem, inventore
              </h1>
            </div>
            <div className="flex justify-between items-center mt-7 mb-2">
              <div className="flex items-center bg-[#EFEFEF] py-2 px-3 rounded-full">
                <h1 className="tracking-widest font-semibold">Read More</h1>
                <span>
                  <IoIosArrowForward className="mt-[2px]" />
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p>
                    2 <span>Comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComment />
                  </span>
                  <p>Leave Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 w-[98%] mb-10">
          <div className="relative">
            <div className="border-solid border-2 border-indigo-600 w-full h-[65vh]">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://i.ibb.co.com/D1D1pPp/s6.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1 className="text-lg bg-[#62911F] text-white px-3 py-2">
                26 August, 2016
              </h1>
            </div>
          </div>

          <div className="px-6 pb-4">
            <h1 className="text-lg tracking-widest mt-7 mb-1">
              Nostrum Iesum Christum cupidatat
            </h1>
            <div className="border-solid border-[2px] border-green-600"></div>
            <div className="mt-8">
              <h1 className="tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                et laboriosam possimus neque, eum voluptas magnam incidunt
                adipisci repellendus. Consectetur eaque officia officiis earum
                consequuntur aliquam libero perferendis sint excepturi animi
                repellendus similique quas dolorem enim at, deleniti quisquam
                rerum voluptas voluptatum magnam. Nobis temporibus incidunt
                commodi? Corporis necessitatibus magni maxime id eaque facere
                quam itaque iste sequi quod deserunt eum nisi quis delectus
                nihil ducimus, temporibus mollitia nesciunt, excepturi eligendi!
                Nostrum molestias accusantium doloremque voluptatem, inventore
              </h1>
            </div>
            <div className="flex justify-between items-center mt-7 mb-2">
              <div className="flex items-center bg-[#EFEFEF] py-2 px-3 rounded-full">
                <h1 className="tracking-widest font-semibold">Read More</h1>
                <span>
                  <IoIosArrowForward className="mt-[2px]" />
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p>
                    2 <span>Comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComment />
                  </span>
                  <p>Leave Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 w-[98%] mb-10">
          <div className="relative">
            <div className="border-solid border-2 border-indigo-600 w-full h-[65vh]">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://i.ibb.co.com/D1D1pPp/s6.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1 className="text-lg bg-[#62911F] text-white px-3 py-2">
                26 August, 2016
              </h1>
            </div>
          </div>

          <div className="px-6 pb-4">
            <h1 className="text-lg tracking-widest mt-7 mb-1">
              Nostrum Iesum Christum cupidatat
            </h1>
            <div className="border-solid border-[2px] border-green-600"></div>
            <div className="mt-8">
              <h1 className="tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                et laboriosam possimus neque, eum voluptas magnam incidunt
                adipisci repellendus. Consectetur eaque officia officiis earum
                consequuntur aliquam libero perferendis sint excepturi animi
                repellendus similique quas dolorem enim at, deleniti quisquam
                rerum voluptas voluptatum magnam. Nobis temporibus incidunt
                commodi? Corporis necessitatibus magni maxime id eaque facere
                quam itaque iste sequi quod deserunt eum nisi quis delectus
                nihil ducimus, temporibus mollitia nesciunt, excepturi eligendi!
                Nostrum molestias accusantium doloremque voluptatem, inventore
              </h1>
            </div>
            <div className="flex justify-between items-center mt-7 mb-2">
              <div className="flex items-center bg-[#EFEFEF] py-2 px-3 rounded-full">
                <h1 className="tracking-widest font-semibold">Read More</h1>
                <span>
                  <IoIosArrowForward className="mt-[2px]" />
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p>
                    2 <span>Comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComment />
                  </span>
                  <p>Leave Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 w-[98%] mb-10">
          <div className="relative">
            <div className="border-solid border-2 border-indigo-600 w-full h-[65vh]">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://i.ibb.co.com/D1D1pPp/s6.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1 className="text-lg bg-[#62911F] text-white px-3 py-2">
                26 August, 2016
              </h1>
            </div>
          </div>

          <div className="px-6 pb-4">
            <h1 className="text-lg tracking-widest mt-7 mb-1">
              Nostrum Iesum Christum cupidatat
            </h1>
            <div className="border-solid border-[2px] border-green-600"></div>
            <div className="mt-8">
              <h1 className="tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                et laboriosam possimus neque, eum voluptas magnam incidunt
                adipisci repellendus. Consectetur eaque officia officiis earum
                consequuntur aliquam libero perferendis sint excepturi animi
                repellendus similique quas dolorem enim at, deleniti quisquam
                rerum voluptas voluptatum magnam. Nobis temporibus incidunt
                commodi? Corporis necessitatibus magni maxime id eaque facere
                quam itaque iste sequi quod deserunt eum nisi quis delectus
                nihil ducimus, temporibus mollitia nesciunt, excepturi eligendi!
                Nostrum molestias accusantium doloremque voluptatem, inventore
              </h1>
            </div>
            <div className="flex justify-between items-center mt-7 mb-2">
              <div className="flex items-center bg-[#EFEFEF] py-2 px-3 rounded-full">
                <h1 className="tracking-widest font-semibold">Read More</h1>
                <span>
                  <IoIosArrowForward className="mt-[2px]" />
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p>
                    2 <span>Comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComment />
                  </span>
                  <p>Leave Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 w-[98%] mb-10">
          <div className="relative">
            <div className="border-solid border-2 border-indigo-600 w-full h-[65vh]">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://i.ibb.co.com/D1D1pPp/s6.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1 className="text-lg bg-[#62911F] text-white px-3 py-2">
                26 August, 2016
              </h1>
            </div>
          </div>

          <div className="px-6 pb-4">
            <h1 className="text-lg tracking-widest mt-7 mb-1">
              Nostrum Iesum Christum cupidatat
            </h1>
            <div className="border-solid border-[2px] border-green-600"></div>
            <div className="mt-8">
              <h1 className="tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                et laboriosam possimus neque, eum voluptas magnam incidunt
                adipisci repellendus. Consectetur eaque officia officiis earum
                consequuntur aliquam libero perferendis sint excepturi animi
                repellendus similique quas dolorem enim at, deleniti quisquam
                rerum voluptas voluptatum magnam. Nobis temporibus incidunt
                commodi? Corporis necessitatibus magni maxime id eaque facere
                quam itaque iste sequi quod deserunt eum nisi quis delectus
                nihil ducimus, temporibus mollitia nesciunt, excepturi eligendi!
                Nostrum molestias accusantium doloremque voluptatem, inventore
              </h1>
            </div>
            <div className="flex justify-between items-center mt-7 mb-2">
              <div className="flex items-center bg-[#EFEFEF] py-2 px-3 rounded-full">
                <h1 className="tracking-widest font-semibold">Read More</h1>
                <span>
                  <IoIosArrowForward className="mt-[2px]" />
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p>
                    2 <span>Comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComment />
                  </span>
                  <p>Leave Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 w-[98%] mb-10">
          <div className="relative">
            <div className="border-solid border-2 border-indigo-600 w-full h-[65vh]">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://i.ibb.co.com/D1D1pPp/s6.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1 className="text-lg bg-[#62911F] text-white px-3 py-2">
                26 August, 2016
              </h1>
            </div>
          </div>

          <div className="px-6 pb-4">
            <h1 className="text-lg tracking-widest mt-7 mb-1">
              Nostrum Iesum Christum cupidatat
            </h1>
            <div className="border-solid border-[2px] border-green-600"></div>
            <div className="mt-8">
              <h1 className="tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                et laboriosam possimus neque, eum voluptas magnam incidunt
                adipisci repellendus. Consectetur eaque officia officiis earum
                consequuntur aliquam libero perferendis sint excepturi animi
                repellendus similique quas dolorem enim at, deleniti quisquam
                rerum voluptas voluptatum magnam. Nobis temporibus incidunt
                commodi? Corporis necessitatibus magni maxime id eaque facere
                quam itaque iste sequi quod deserunt eum nisi quis delectus
                nihil ducimus, temporibus mollitia nesciunt, excepturi eligendi!
                Nostrum molestias accusantium doloremque voluptatem, inventore
              </h1>
            </div>
            <div className="flex justify-between items-center mt-7 mb-2">
              <div className="flex items-center bg-[#EFEFEF] py-2 px-3 rounded-full">
                <h1 className="tracking-widest font-semibold">Read More</h1>
                <span>
                  <IoIosArrowForward className="mt-[2px]" />
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p>
                    2 <span>Comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComment />
                  </span>
                  <p>Leave Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 w-[98%] mb-10">
          <div className="relative">
            <div className="border-solid border-2 border-indigo-600 w-full h-[65vh]">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://i.ibb.co.com/D1D1pPp/s6.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1 className="text-lg bg-[#62911F] text-white px-3 py-2">
                26 August, 2016
              </h1>
            </div>
          </div>

          <div className="px-6 pb-4">
            <h1 className="text-lg tracking-widest mt-7 mb-1">
              Nostrum Iesum Christum cupidatat
            </h1>
            <div className="border-solid border-[2px] border-green-600"></div>
            <div className="mt-8">
              <h1 className="tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                et laboriosam possimus neque, eum voluptas magnam incidunt
                adipisci repellendus. Consectetur eaque officia officiis earum
                consequuntur aliquam libero perferendis sint excepturi animi
                repellendus similique quas dolorem enim at, deleniti quisquam
                rerum voluptas voluptatum magnam. Nobis temporibus incidunt
                commodi? Corporis necessitatibus magni maxime id eaque facere
                quam itaque iste sequi quod deserunt eum nisi quis delectus
                nihil ducimus, temporibus mollitia nesciunt, excepturi eligendi!
                Nostrum molestias accusantium doloremque voluptatem, inventore
              </h1>
            </div>
            <div className="flex justify-between items-center mt-7 mb-2">
              <div className="flex items-center bg-[#EFEFEF] py-2 px-3 rounded-full">
                <h1 className="tracking-widest font-semibold">Read More</h1>
                <span>
                  <IoIosArrowForward className="mt-[2px]" />
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p>
                    2 <span>Comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComment />
                  </span>
                  <p>Leave Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
