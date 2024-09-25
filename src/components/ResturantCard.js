import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, cuisines, name, avgRating, sla, costForTwo } = resData?.info;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img 
                src={`${CDN_URL}${cloudinaryImageId}`} 
                alt="res-logo" 
                className="w-full h-48 object-cover" 
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600 mb-1">{cuisines .join(', ')}</p>
                <p className="text-gray-500 mb-1">{avgRating} stars</p>
                <p className="text-gray-500 mb-1">{sla.deliveryTime} minutes</p>
                <p className="text-gray-600">{costForTwo}</p>
            </div>
        </div>
    );
};

export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return (<div>
            <label className="p-2 absolute m-1 bg-red-500 text-white rounded-lg">Promoted</label>
            <ResturantCard resData={props.resData}/>
        </div>);
    }
}

export default ResturantCard;
