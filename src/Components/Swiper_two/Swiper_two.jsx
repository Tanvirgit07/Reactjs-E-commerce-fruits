// // import  { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import "./Swiper_two.css";

// // import required modules
// import { FreeMode, Pagination } from "swiper/modules";

// const Swiper_three = () => {
//   return (
//     <div>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide className="">
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[62vh] w-[87%]">
//             <div className="">
//               <div>
//                 <img
//                   className="h-72 bg-cover object-cover"
//                   src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="rating rating-xs">
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-5"
//                       className="mask mask-star-2 bg-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm">20% OFF</h1>
//                   </div>
//                 </div>
//                 <div className="text-start">
//                   <h1 className="text-base">this is car </h1>
//                   <h1 className="text-base font-semibold">$122.55</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Swiper_three;
