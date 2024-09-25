import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        // console.log("useEffect of contact");
    }, []);

    return (
        <div className="flex items-start justify-start h-screen p-6 bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
                <h3 className="text-lg text-gray-700 mb-4">
                    Phone No: <span className="font-semibold text-gray-800">+91-9354013292</span>
                </h3>
                <h3 className="text-lg text-gray-700">
                    Email ID: <span className="font-semibold text-gray-800">rishabh_t@cs.iitr.ac.in</span>
                </h3>
            </div>
        </div>
    );
};

export default Contact;
