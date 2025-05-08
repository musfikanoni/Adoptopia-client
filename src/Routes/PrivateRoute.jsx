import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading) {
        return <div className="flex justify-center mt-72">
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }
    
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;