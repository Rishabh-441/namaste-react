import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restList, setRestList] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);
    const [message, setMessage] = useState("");

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);

        const json = await data.json();
        console.log(json);
        const modJson = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestList(modJson);
        setFilteredRestraunt(modJson);
    }

    //conditional rendering
    return filteredRestraunt.length === 0 ? <Shimmer></Shimmer> : (
        <div className="body">
            <div className="message-box">
                {message}
            </div>
            <div className="filter">
                <div className="search">
                    <input type="text" name="search-box" id="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button id="search-btn" onClick={() => {
                        //filter the restraunt cards and update the UI

                        const filterdSearchList = restList.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        if (filterdSearchList.length === 0) {
                            setMessage("No Results Found!!")
                        }
                        else setFilteredRestraunt(filterdSearchList);

                    }}>Search</button>
                </div>

                <button className="filter-button" onClick={() => {
                    const filteredList = filteredRestraunt.filter((res) => 
                        res.info.avgRating > 4
                    );
                    setFilteredRestraunt(filteredList);
                }}>Top Rated Restaunrants</button>

                <button className="remove-filters" onClick={() => {
                    setFilteredRestraunt(restList);
                }}>Remove All Filters</button>

            </div>
            <div className="res-container">
                {/* Resturant-Card */}
                {filteredRestraunt.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant}/>)}
            </div>
        </div>
    );
};

export default Body;