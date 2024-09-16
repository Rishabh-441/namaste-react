import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, cuisines, name, avgRating, sla, costForTwo } = resData?.info;

    return (
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <p>{cuisines.slice(0, 3).join(',')}</p>
            <p>{avgRating} stars</p>
            <p>{sla.deliveryTime} minutes</p>
            <p>{costForTwo}</p>
        </div>
    );
};

export default ResturantCard;