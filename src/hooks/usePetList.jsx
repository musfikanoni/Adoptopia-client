import { useEffect, useState } from 'react';

const usePetList = () => {
    const [petList, setPetList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://assignment-12-server-amber.vercel.app/petList')
        .then(res => res.json())
        .then(data => {
            setPetList(data);
            setLoading(false);
        });
    }, [])

    return [petList, loading];
};

export default usePetList;