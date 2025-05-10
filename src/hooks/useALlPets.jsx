import { useEffect, useState } from 'react';

const useAllPets = () => {
  const [allPets, setAllPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access-token');

    fetch('https://assignment-12-server-amber.vercel.app/allPets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("unauthorized access");
        }
        return res.json();
      })
      .then(data => {
        setAllPets(data); // Now this will correctly receive the data
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching all pets:", error.message);
        setLoading(false);
      });
  }, []);

  return [allPets, loading];
};

export default useAllPets;
