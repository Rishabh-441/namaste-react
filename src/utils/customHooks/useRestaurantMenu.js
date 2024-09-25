import { REST_API_URL } from "../constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {

    const [completeData, setCompleteData] = useState();
    const [name, setName] = useState([]);


    useEffect(()=> {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(REST_API_URL[0] + resId + REST_API_URL[1]);
        const json = await data.json();
        setName(json.data.cards[0].card.card.text);
        setCompleteData(json);
    }

    return [completeData, name];
}

export default useRestaurantMenu;