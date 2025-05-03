import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Spinner } from "flowbite-react";

const UserOnlyRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div className="flex justify-center mt-72">
      <Spinner aria-label="Loading user-only route" size="xl" />
    </div>
  }

  // ✅ Allow only if user is logged in AND NOT admin
  if (user && !isAdmin) {
    return children;
  }
    // return <Navigate to="/login" state={{ from: location }} replace />;
};
export default UserOnlyRoute;