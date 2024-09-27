import { useState } from "react";
import MenuItemBox from "./MenuItemBox";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import ResturantCard from "./ResturantCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [filteredRestMenuList, setFilteredRestMenuList] = useState([]);
    const { resId } = useParams();
    const [completeData, name] = useRestaurantMenu(resId);
    console.log(completeData);
    const [showItems, setShowItems] = useState(0);


    // Ensure completeData is properly loaded
console.log("Complete Data:", completeData);

const restaurantItemsList = completeData?.data?.cards.flatMap((cardGroup) => 
    cardGroup?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => {
        return card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    }) || []
) || [];

console.log("This is restaurantItemsList:", restaurantItemsList);

if (restaurantItemsList.length === 0) {
    return <ShimmerMenu />;
}

    // console.log(completeData);

    return (
        // <div></div> 
        <div className="p-6 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">{name}</h1>
            <p className="text-lg text-center text-gray-600 mb-1">
                {completeData?.data?.cards[0]?.card?.card?.text}
            </p>
            <p className="text-lg text-center text-gray-500 mb-6">
                Avg. rating {completeData?.data?.cards[2]?.card?.card?.info?.avgRating} &#9733;
            </p>
            
            <ul >
                {
                    restaurantItemsList?.map((card, index) => {
                        return <RestaurantCategory key={card.card.card.title} card={card} showItems={index===showItems ? true : false} modifyShowItems={() => {
                            setShowItems(showItems === index ? -1 : index);
                        }}></RestaurantCategory>
                    })
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;
