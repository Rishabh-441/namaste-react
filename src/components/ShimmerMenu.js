const ShimmerMenu = () => {
    return (
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            {/* Shimmer Menu Head */}
            <div className="bg-gray-300 animate-pulse h-20 w-1/2 rounded-lg mb-4 ml-auto mr-auto"></div>
            
            {/* Shimmer Menu Items */}
            <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-gray-300 animate-pulse h-72 rounded-lg"></div>
                ))}
            </div>
        </div>
    );
};

export default ShimmerMenu;
