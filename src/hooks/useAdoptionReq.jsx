import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useAdoptionReq = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const { data: reqCart=[] } = useQuery({
        queryKey: ['reqCart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adoptionRequest')
            return res.data
        }
    })
    return[reqCart];
};

export default useAdoptionReq;