import React, {lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import ResturantCard from "./components/ResturantCard";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import '../index.css';
import UserContext from "./utils/customHooks/UserContext.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const AppLayout = () => {


const [userName , setUserName] = useState("Dummy Name");

useEffect(() => {
  const data = {
    name : "Rishabh Tiwari",
  }
  setUserName(data.name);
}, []);

    return (
        <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
          <div className="app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Outlet/>
            {/* Footer */}
          </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>   //lazy loading
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);