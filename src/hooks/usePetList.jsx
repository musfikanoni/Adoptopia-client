import { useEffect, useState } from 'react';

const usePetList = () => {
    const [petList, setPetList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/petList')
        .then(res => res.json())
        .then(data => {
            setPetList(data);
            setLoading(false);
        });
    }, [])

    return [petList, loading];
};

export default usePetList;