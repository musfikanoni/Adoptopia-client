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
import DonationDetails from "../pages/Shared/DonationDetails/DonationDetails";
import AddPet from "../pages/Dashboard/AddPet/AddPet";
import AdoptionRequest from "../pages/Dashboard/AdoptionRequest/AdoptionRequest";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import MyAddedPets from "../pages/Dashboard/MyAddedPets/MyAddedPets";
import UpdatePet from "../pages/Shared/UpdatePet/UpdatePet";
import CreateDonation from "../pages/Dashboard/CreateDonation/CreateDonation";
import MyDonationCamp from "../pages/Dashboard/MyDonationCamp/MyDonationCamp";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import MyDonation from "../pages/Dashboard/MyDonation/MyDonation";
import Error from "../pages/Error/Error";
import UserOnlyRoute from "./UserOnlyRoute";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import AllPets from "../pages/Dashboard/AllPets/AllPets";
import UpdateAllPetsData from "../pages/Dashboard/UpdateAllPetsData/UpdateAllPetsData";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
          path: 'petList/:id',
          element: <PetDetails></PetDetails>,
          loader: ({params}) => fetch(`https://assignment-12-server-amber.vercel.app/petList/${params.id}`)
        },
        {
          path: 'donationCampaign',
          element: <DonationCampaigns></DonationCampaigns>
        },
        {
          path: 'donationCampaign/:id',
          element: <DonationDetails></DonationDetails>,
          loader: ({params}) => fetch(`https://assignment-12-server-amber.vercel.app/donationCampaign/${params.id}`)
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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          index: true,
          path: 'userDashboard',
          element: <UserOnlyRoute><UserDashboard></UserDashboard></UserOnlyRoute>
        },
        {
          path: 'addPet',
          element: <UserOnlyRoute><AddPet /></UserOnlyRoute>
        },
        {
          path: 'myAddedPets',
          element: <UserOnlyRoute><MyAddedPets></MyAddedPets></UserOnlyRoute>
        },
        {
          path: 'createDonation',
          element: <UserOnlyRoute><CreateDonation></CreateDonation></UserOnlyRoute>
        },
        {
          path: 'myDonationCamp',
          element: <UserOnlyRoute><MyDonationCamp></MyDonationCamp></UserOnlyRoute>
        },
        {
          path: 'updatePet/:id',
          element: <UpdatePet></UpdatePet>,
          loader: ({params}) => fetch(`https://assignment-12-server-amber.vercel.app/petList/${params.id}`)
        },
        {
          path: 'updateAllPet/:id',
          element: <UpdateAllPetsData />,
          loader: ({params}) => fetch(`http://localhost:5001/allPets/${params.id}`)
        },
        {
          path: 'adoptionRequest',
          element: <AdoptionRequest></AdoptionRequest>
        },
        {
          path: 'myDonations',
          element: <MyDonation></MyDonation>
        },
        {
          // index: true,
          path: 'adminDashboard',
          element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'allPets',
          element: <AdminRoute><AllPets /></AdminRoute>
        }
      ]
    }
  ]);