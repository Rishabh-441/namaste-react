import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
                imgUrl: "Dummy Img URL",
                gitHubUrl: "Dummy Github URL"
            }
        }
    }

    async componentDidMount() {
        const myId = "Rishabh-441";
        const data = await fetch("https://api.github.com/users/" + myId);
        const json = await data.json();

        this.setState({
            userInfo: {
                name: json?.name || "Unnamed",
                location: json?.location || "India",
                imgUrl: json?.avatar_url,
                gitHubUrl: json?.html_url
            }
        });
    }

    render() {
        const { name, location, imgUrl, gitHubUrl } = this.state.userInfo;

        return (
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
                <img className="w-full h-auto object-cover" src={imgUrl} alt="Img not found" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <h3 className="text-lg text-gray-600">Location: {location}</h3>
                    <h3 className="text-lg text-gray-600">
                        GitHub URL: <a className="text-blue-500 hover:underline" href={gitHubUrl} target="_blank" rel="noopener noreferrer">Link</a>
                    </h3>
                    <h3 className="text-lg text-gray-600">Contact: rishabh_t@cs.iitr.ac.in</h3>
                </div>
            </div>
        );
    }
}

export default UserClass;
