import { useEffect } from "react";
import { REST_MENU_IMG_URL } from "../utils/constants";

const MenuItemBox = (props) => {
    const { menuItem } = props;
    const aggregatedRating = menuItem.ratings.aggregatedRating;

    return (
        <>
            <div className="flex my-6 justify-between p-3">
                <div>
                    <h3 className="font-bold">{menuItem.name}</h3>
                    <p className="text-sm">{menuItem.description}</p>
                    <h4 className="font-bold">&#x20B9; {menuItem.price / 100 || "Not Listed"}</h4>
                    <div className="mt-6">
                        <span className="text-gray-500">{aggregatedRating?.rating}&#9733;</span>
                        <span className="text-gray-500">({aggregatedRating?.ratingCount || "No ratings"})</span>
                        {
                            menuItem.itemAttribute.vegClassifier.toLowerCase() === "veg" 
                                ? <span className="bg-green-700 p-2 rounded-lg m-3 text-white">VEG</span> 
                                : <span className="bg-red-700 p-2 rounded-lg m-3 text-white">NON VEG</span>
                        }
                    </div>
                </div>
                <img className="w-32 h-32 rounded-lg"
                    src={`${REST_MENU_IMG_URL}${menuItem.imageId}`} 
                    alt="No img found" 
                    onError={(e) => e.target.src = "https://imgs.search.brave.com/ehHxq2wZblD_JhWcbMBCI8Ze7K0nz5DccFA4hOLTi_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/OTYyMzU0L3ZlY3Rv/ci9uby1pbWFnZS1h/dmFpbGFibGUtc2ln/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eGJHelFpTF9V/SU1GRFVadGUxVTBl/bmQwcDNFOGl3b2NJ/T0d0X3N3bHl3RT0"} 
                />
            </div>
            <hr/>
        </>
    );
};

export default MenuItemBox;
