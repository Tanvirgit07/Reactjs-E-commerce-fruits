const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co.com/D1D1pPp/s6.jpg')] mt-16 mb-16 h-[25vh] w-full bg-cover bg-center text-white flex justify-between items-center relative">

            <div className="ml-16">
                <h1 className="text-3xl font-semibold">YELLOW HEART KIWI FRUIT</h1>
                <p className="tracking-[0.2rem] text-sm">Organic Fruits and Vegetable</p>
            </div>

            <div className="absolute bg-green-500 px-4 py-3 right-14 bottom-0">
                <p className="text-xl">100 pcs</p>
                <p className="text-2xl">pack</p>
            </div>

            </div>
           
        </div>
    );
};

export default Banner;