import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';

const LandingPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ev-charge-finder.p.rapidapi.com/search-by-coordinates-point', {
                    params: {
                        lat: '37.359428',
                        lng: '-121.925337',
                        limit: '2'
                    },
                    headers: {
                        'X-RapidAPI-Key': '4622a8704bmsh5122f1939f2d39fp1f0569jsnb3aa836d16e1',
                        'X-RapidAPI-Host': 'ev-charge-finder.p.rapidapi.com',
                    },
                });
                if (response.status === 200) {
                    setData(response.data.data || []); // Set data to an empty array if response.data.data is falsy
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false); // Update loading state regardless of success/failure
            }
        };

        fetchData();
    }, []);

    const handleClick = (item) => {
        navToDetail(item);
    };

    const navToDetail = (item) => {
        nav(`/detail/${item.id}`, { state: { itemData: item } });
    };

    return (
        <main>
            <h3 className="title">Near Me</h3>
            {isLoading ? (
                <p className='loading'>Loading...</p>
            ) : data && data.length > 0 ? (
                <div className="card-container">
                    {data.map((item, index) => (
                        <Card data={item} key={index} onClick={() => handleClick(item)} />
                    ))}
                </div>
            ) : (
                <p>No data found</p>
            )}
        </main>
    );
};

export default LandingPage;
