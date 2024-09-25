const Shimmer = () => {
    return (
        <div className="flex flex-col p-4 space-y-4">
            {/* Top Shimmer Cards */}
            <div className="flex space-x-4">
                <div className="bg-gray-300 animate-pulse h-14 w-28 rounded-lg"></div>
                <div className="bg-gray-300 animate-pulse h-14 w-28 rounded-lg"></div>
                <div className="bg-gray-300 animate-pulse h-14 w-28 rounded-lg"></div>
            </div>
            
            {/* Lower Shimmer Cards */}
            <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="bg-gray-300 animate-pulse h-80 rounded-lg"></div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
