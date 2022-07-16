import React, { useEffect, useState } from 'react';

const API_KEY = 'f78a91453502c98c577f25573b223ef2';

function FetchData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=f78a91453502c98c577f25573b223ef2')
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setData(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
        })
    }, [])
    
    if(!error){
        console.log(data);
        return data;
        
    }
}

export default FetchData;