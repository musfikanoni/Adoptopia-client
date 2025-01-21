import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useAdoptionReq = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: reqCart = [] } = useQuery({
        queryKey: ['reqCart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adoptionRequest?email=${user?.email}`)
            return res.data;
        }
    })
    return[reqCart, refetch];
};

export default useAdoptionReq;