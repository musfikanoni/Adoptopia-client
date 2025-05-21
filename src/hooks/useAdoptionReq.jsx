import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAdoptionRequest = (petId, email) => {
     const [requestedPets, setRequestedPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!email) return;

        const fetchRequestedPets = async () => {
            try {
                const res = await axiosSecure.get(`/adoptionRequest/${email}`);
                setRequestedPets(res.data);
            } catch (error) {
                console.error("Error fetching requested pets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRequestedPets();
    }, [email, axiosSecure]);

    return [requestedPets, loading];
}

export default useAdoptionRequest;
