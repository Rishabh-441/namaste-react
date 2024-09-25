import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong🥲</h2>
            <h3 style={{color:"gray"}}>{err.status + " : " + err.statusText}</h3>
            <h3 style={{color:"gray"}}>{ err?.error?.message}</h3>
        </div>
    );
};

export default ErrorPage;