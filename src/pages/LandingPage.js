import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';

const LandingPage = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('All');
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://ev-charge-finder.p.rapidapi.com/search-by-location', {
                    params: {
                        near: query,
                        limit: '2'
                    },
                    headers: {
                        'X-RapidAPI-Key': '4622a8704bmsh5122f1939f2d39fp1f0569jsnb3aa836d16e1',
                        'X-RapidAPI-Host': 'ev-charge-finder.p.rapidapi.com',
                    },
                });
                if (response.status === 200) {
                    setData(response.data);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [query]);

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            setQuery(e.target.value);
        }
    };

    const handleClick = (item) => {
        navToDetail(item);
    };

    const navToDetail = (item) => {
        nav(`/detail/${item.id}`, { state: { itemData: item } });
    };

    return (
        <main>
            <input type="text" placeholder="Search locations" onKeyDown={(e) => onSearch(e)} />
            {/* <h3 className="title">{query} Locations</h3> */}
            {isLoading ? (
                <p className='loading'>Loading...</p>
            ) : (
                <div className="card-container">
                    {data && data.data ? (
                        data.data.map((item, index) => (
                            <Card data={item} key={index} onClick={() => handleClick(item)} />
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            )}
        </main>
    );
};

export default LandingPage;
