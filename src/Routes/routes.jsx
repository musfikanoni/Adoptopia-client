import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PetListing from "../pages/PetListing/PetListing";
import PetDetails from "../pages/Shared/PetDetails/PetDetails";
import Dashboard from "../Layout/Dashboard";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'petList',
          element: <PetListing></PetListing>
        },
        {
          path: 'donationCampaign',
          element: <DonationCampaigns></DonationCampaigns>
        },
        {
          path: 'petList/:id',
          element: <PetDetails></PetDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/petList/${params.id}`)
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'pets',
          // element: 
        }
      ]
    }
  ]);