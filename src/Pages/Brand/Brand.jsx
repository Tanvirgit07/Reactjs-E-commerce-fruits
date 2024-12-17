import Favorite_brand from "../../Components/Favorite_brand/Favorite_brand";
import Left_Favorite from "../../Components/Left_Favorite/Left_Favorite";

const Brand = () => {
    return (
        <div className="flex justify-between">
            <div className="w-[25%]">
                <Left_Favorite/>
            </div>           
            <div className="w-[72%] mt-8">
                <Favorite_brand/>
            </div>           
        </div>
    );
};

export default Brand;