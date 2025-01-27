import { CiBoxList, CiGrid41 } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Special = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="w-[25%]">
          <div className="mt-8 w-[85%] mx-auto">
            <div>
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
<div className="border-solid border-[1px] border-green-400 mt-8"></div>
          <div className="w-[85%] mx-auto border object-cover p-5 h-[40vh] mt-10">
          <img className="w-full h-full" src="https://i.ibb.co.com/HHDZtvb/p5.gif" alt="" />
          </div>
        </div>
        <div className="w-[72%]">
          <div className="flex justify-between items-center w-[95%] mt-8">
            <div>
              <h1 className="text-xl tracking-widest font-semibold">
                SPECIAL OFFER
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <FaHome />
              <MdKeyboardDoubleArrowRight />
              <h1 className="tracking-widest">Special Offer</h1>
            </div>
          </div>

          <div className="flex w-[95%] mt-8 justify-between items-center">
            <div className="flex items-center gap-5">
              <div>
                <CiGrid41 className="text-3xl font-bold" />
              </div>
              <div>
                <CiBoxList className="text-3xl font-bold" />
              </div>
              <div>
                <h1 className="tracking-widest">
                  Product Compare <span>(0)</span>
                </h1>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 items-center">
                <div>
                  <p className="tracking-widest">Sort By : </p>
                </div>
                <div className="border w-36">
                  <select
                    name=""
                    id=""
                    className="w-full h-9 outline-none rounded-l-full pl-3 cursor-pointer border-none text-sm"
                  >
                    <option className="" value="">
                      categories
                    </option>
                    <option value="">vegetable</option>
                    <option value="">
                      vegetable <br />
                    </option>
                    <option value="">vegetable</option>
                    <option value="">vegetable</option>
                    <option value="">vegetable</option>
                    <option value="">vegetable</option>
                    <option value="">vegetable</option>
                    <option value="">vegetable</option>
                    <option value="">vegetable</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="tracking-widest">Shows : </p>
                </div>
                <div className="border w-24">
                  <select
                    name=""
                    id=""
                    className="w-full h-8 outline-none rounded-l-full pl-3 cursor-pointer border-none text-sm"
                  >
                    <option className="" value="">
                      12
                    </option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-8 w-[95%]">
            <div className="w-52">
              <div className="h-64 bg-[#F7F7F7] border relative">
                <img src="https://i.ibb.co.com/GsfwD57/p1.png" alt="" />
                <div className="absolute w-20 h-20 -top-[2px] -left-[2.1px] ">
                  <img
                    className=""
                    src="https://i.ibb.co.com/jfCZ4Mv/p3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 mb-1">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-widest text-[#6DAC23] text-xs font-bold">
                      10% OFF
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="tracking-widest">Arcu vitae imperdiet</h1>
                  <p className="tracking-widest font-bold">
                    $110.00{" "}
                    <span className="line-through text-gray-400">$120.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-52">
              <div className="h-64 bg-[#F7F7F7] border relative">
                <img src="https://i.ibb.co.com/GsfwD57/p1.png" alt="" />
                <div className="absolute w-20 h-20 -top-[2px] -left-[2.1px] ">
                  <img
                    className=""
                    src="https://i.ibb.co.com/jfCZ4Mv/p3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 mb-1">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-widest text-[#6DAC23] text-xs font-bold">
                      10% OFF
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="tracking-widest">Arcu vitae imperdiet</h1>
                  <p className="tracking-widest font-bold">
                    $110.00{" "}
                    <span className="line-through text-gray-400">$120.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-52">
              <div className="h-64 bg-[#F7F7F7] border relative">
                <img src="https://i.ibb.co.com/GsfwD57/p1.png" alt="" />
                <div className="absolute w-20 h-20 -top-[2px] -left-[2.1px] ">
                  <img
                    className=""
                    src="https://i.ibb.co.com/jfCZ4Mv/p3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 mb-1">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-widest text-[#6DAC23] text-xs font-bold">
                      10% OFF
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="tracking-widest">Arcu vitae imperdiet</h1>
                  <p className="tracking-widest font-bold">
                    $110.00{" "}
                    <span className="line-through text-gray-400">$120.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-52">
              <div className="h-64 bg-[#F7F7F7] border relative">
                <img src="https://i.ibb.co.com/GsfwD57/p1.png" alt="" />
                <div className="absolute w-20 h-20 -top-[2px] -left-[2.1px] ">
                  <img
                    className=""
                    src="https://i.ibb.co.com/jfCZ4Mv/p3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 mb-1">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-widest text-[#6DAC23] text-xs font-bold">
                      10% OFF
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="tracking-widest">Arcu vitae imperdiet</h1>
                  <p className="tracking-widest font-bold">
                    $110.00{" "}
                    <span className="line-through text-gray-400">$120.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-52">
              <div className="h-64 bg-[#F7F7F7] border relative">
                <img src="https://i.ibb.co.com/GsfwD57/p1.png" alt="" />
                <div className="absolute w-20 h-20 -top-[2px] -left-[2.1px] ">
                  <img
                    className=""
                    src="https://i.ibb.co.com/jfCZ4Mv/p3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 mb-1">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-widest text-[#6DAC23] text-xs font-bold">
                      10% OFF
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="tracking-widest">Arcu vitae imperdiet</h1>
                  <p className="tracking-widest font-bold">
                    $110.00{" "}
                    <span className="line-through text-gray-400">$120.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-52">
              <div className="h-64 bg-[#F7F7F7] border relative">
                <img src="https://i.ibb.co.com/GsfwD57/p1.png" alt="" />
                <div className="absolute w-20 h-20 -top-[2px] -left-[2.1px] ">
                  <img
                    className=""
                    src="https://i.ibb.co.com/jfCZ4Mv/p3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 mb-1">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-widest text-[#6DAC23] text-xs font-bold">
                      10% OFF
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="tracking-widest">Arcu vitae imperdiet</h1>
                  <p className="tracking-widest font-bold">
                    $110.00{" "}
                    <span className="line-through text-gray-400">$120.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-52">
              <div className="h-64 bg-[#F7F7F7] border relative">
                <img src="https://i.ibb.co.com/GsfwD57/p1.png" alt="" />
                <div className="absolute w-20 h-20 -top-[2px] -left-[2.1px] ">
                  <img
                    className=""
                    src="https://i.ibb.co.com/jfCZ4Mv/p3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 mb-1">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-widest text-[#6DAC23] text-xs font-bold">
                      10% OFF
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="tracking-widest">Arcu vitae imperdiet</h1>
                  <p className="tracking-widest font-bold">
                    $110.00{" "}
                    <span className="line-through text-gray-400">$120.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Subscribe />
      </div>
    </div>
  );
};

export default Special;
