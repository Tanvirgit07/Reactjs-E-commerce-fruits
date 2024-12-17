import { FaAngleDown, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="bg-[#6DAC23] flex justify-between px-12">
      <div className="w-[20%]">
        <div className="">
          <details className="dropdown w-full group">
            <summary className="bg-[#88C53F] cursor-pointer rounded-none w-full flex justify-between px-3 items-center h-16">
              <h1 className="text-base font-semibold text-white">CATEGORIES</h1>
              <h1>
                <FaAngleDown className="text-lg font-semibold text-white transform transition-transform duration-500 group-open:rotate-180" />
              </h1>
            </summary>
            {/* <ul className="menu dropdown-content bg-base-100 z-[1] p-2 shadow w-full overflow-hidden transition-max-height duration-500 max-h-0 group-open:max-h-40">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul> */}

            <ul className="menu dropdown-content bg-base-100 z-[1] p-2 shadow w-full overflow-y-auto transition-max-height duration-500">
              <li className="w-full">
                <a className="block">Item 1</a>
              </li>
              <li className="w-full">
                <a className="block">Item 2</a>
              </li>
              <li className="w-full">
                <a className="block">Item 3</a>
              </li>
              <li className="w-full">
                <a className="block">Item 4</a>
              </li>
              <li className="w-full">
                <a className="block">Item 5</a>
              </li>
              <li className="w-full">
                <a className="block">Item 6</a>
              </li>
              <li className="w-full">
                <a className="block">Item 7</a>
              </li>
              <li className="w-full">
                <a className="block">Item 8</a>
              </li>
              <li className="w-full">
                <a className="block">Item 9</a>
              </li>
              <li className="w-full">
                <a className="block">Item 10</a>
              </li>
              <li className="w-full">
                <a className="block">Item 11</a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="w-[67%] flex my-auto items-center justify-center">
        {/* Select Dropdown */}
        <div className="w-[30%]">
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
              <span>
                <ol>
                  <li>spinach</li>
                  <li>spinach</li>
                  <li>spinach</li>
                </ol>
              </span>
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

        {/* Divider */}
        <div className="h-9 w-[1px] bg-gray-300 mx-2"></div>

        {/* Input Field */}
        <div className="w-[65%]">
          <input
            type="text"
            placeholder="SEARCH PRODUCTS HERE"
            className="w-full h-9 border-none outline-none px-4"
          />
        </div>

        {/* Search Icon */}
        <div className="w-[5.1%] bg-black h-9 rounded-r-full flex justify-center items-center cursor-pointer">
          <FaSearch className="text-base font-bold text-white" />
        </div>
      </div>

      <div className="w-[7%] flex items-center justify-center h-10 bg-white rounded-full my-auto">
        <IoCartOutline className="text-3xl" />
        <h1 className="text-lg font-semibold ml-1">(0)</h1>
      </div>
    </div>
  );
};

export default Search;
