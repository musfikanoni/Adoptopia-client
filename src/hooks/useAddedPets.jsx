import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useAddedPets = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: addedPet = [] } = useQuery({
        queryKey: ['addedPet', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/petList?email=${user?.email}`)
            console.log('email', res)
            return res.data;
        }
    })
    return [addedPet, refetch];
};

export default useAddedPets;