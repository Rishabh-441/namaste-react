import { useContext, useEffect, useState } from "react";
import restaurantList from "../utils/mockData"; // If you’re not using this, you can remove this import
import ResturantCard, {withPromotedLabel} from "./ResturantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/customHooks/UserContext";

const Body = () => {
    const [restList, setRestList] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);
    const [message, setMessage] = useState("");
    const [searchText, setSearchText] = useState("");

    const {loggedInUser, setUserName} = useContext(UserContext);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        
        const modJson = json.data.cards
            .filter((card) => {
                return card.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined;
            })
            .map((card) => card.card.card.gridElements.infoWithStyle.restaurants)
            .flat();
    
        // Use a Map to track unique restaurants by id
        const uniqueRestaurantsMap = new Map();
    
        modJson.forEach((restaurant) => {
            const restaurantId = restaurant.info.id; 
            if (!uniqueRestaurantsMap.has(restaurantId)) {
                uniqueRestaurantsMap.set(restaurantId, restaurant); // Add restaurant if id is not in map
            }
        });
    
        const uniqueRestaurants = Array.from(uniqueRestaurantsMap.values()); // Get unique restaurants
    
        setRestList(uniqueRestaurants);
        setFilteredRestraunt(uniqueRestaurants);
    };

    // console.log(restList);
    
    

    const onlineStatus = useOnlineStatus();
    const PromotedRestaurantCard = withPromotedLabel(ResturantCard);

    if (onlineStatus === false) return (
        <h1 className="text-red-600 text-center text-xl">
            Seems like you are Offline!! <br />Please check your internet connection.
        </h1>
    );

    // Conditional rendering
    return filteredRestraunt.length === 0 ? <Shimmer /> : (
        <div className="p-6">
            {message && <div className="mb-4 text-yellow-500">{message}</div>}
            <div className="flex items-center justify-between mb-4 flex-col sm:flex-row">
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <input
                        type="text"
                        className="border border-gray-300 rounded p-2 w-full sm:w-64"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
                        onClick={() => {
                            const filteredSearchList = restList.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            if (filteredSearchList.length === 0) {
                                setMessage("No Results Found!!");
                            } else {
                                setFilteredRestraunt(filteredSearchList);
                                setMessage(""); // Clear message on valid search
                            }
                        }}
                    >
                        Search
                    </button>
                </div>

                <div>
                    <label htmlFor="userNameText">Enter User Name: </label>
                    <input type="text" name="userNameText" id="userNameText" className="border-2 p-2 rounded-xl" value={loggedInUser} onChange={
                        (e) => {
                            setUserName(e.target.value);
                        }
                    }/>
                </div>

                <div className="flex space-x-2 mt-4 sm:mt-0">
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
                        onClick={() => {
                            const filteredList = filteredRestraunt.filter((res) => 
                                res.info.avgRating > 4
                            );
                            if (filteredList.length != 0)setFilteredRestraunt(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>

                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
                    onClick={() => {
                        const filteredList = filteredRestraunt.filter((res) => {
                            return res.info.promoted === true;
                        })
                        if (filteredList.length != 0) setFilteredRestraunt(filteredList);
                    }}>Show Promoted Restaurants</button>

                    <button
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-300 transition"
                        onClick={() => {
                            setFilteredRestraunt(restList);
                            setMessage(""); // Clear message on removing filters
                        }}
                    >
                        Remove All Filters
                    </button>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Restaurant Card */}
                {filteredRestraunt.map(restaurant => (
                    <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                        {
                            (restaurant.info.promoted || false) ? <PromotedRestaurantCard resData={restaurant}/> : <ResturantCard resData={restaurant} />
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
