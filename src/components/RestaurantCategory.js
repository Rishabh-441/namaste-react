import { useState } from "react";
import MenuItemBox from "./MenuItemBox";

const RestaurantCategory = (props) => {
    const {card} = props;
    const [showItems, setShowItems] = useState(false);
    const [arrowButton, setArrowButton] = useState("⬇️")

    return (<div className="w-1/2 mx-auto p-2 rounded-lg" key={card?.card?.card?.title}>
                <div className="flex justify-between cursor-pointer my-2 shadow-md p-2 rounded-lg  bg-slate-200" onClick={() => {
                    setShowItems(!showItems);
                    if (showItems === true) {
                        setArrowButton("⬇");
                    }
                    else {
                        setArrowButton("⬆️")
                    }
                }}>
                    <button className="text-lg font-bold">{card?.card?.card?.title} ({card?.card?.card?.itemCards.length})</button>
                    <h3>{arrowButton}</h3>
                </div>
            {
                card.card.card.itemCards.map((item) => {
                    return (
                        <div key={item.card.info.id}>
                            {showItems && <MenuItemBox menuItem={item.card.info}/>}
                        </div>
                    )
                })
            }
        </div>)
}

export default RestaurantCategory;