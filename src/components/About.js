import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("parent component did mount");
    }

    render() {
        console.log("parent render");
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About</h1>
                <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
                    <UserClass name={"Rishabh Tiwari"} location={"IIT Roorkee"} />
                </div>
            </div>
        );
    }
}

export default About;
