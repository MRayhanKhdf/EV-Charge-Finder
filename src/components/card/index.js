import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const Card = ({ data, onClick }) => {
    const nav = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick(data);
        } else {
            // Sesuaikan dengan navigasi yang kamu inginkan
            nav(`/detail/${data.id}`, { state: { itemData: data } });
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            {data ? (
                <>
                    <div className="card-info">
                        <h3>{data.name}</h3>
                        <div>
                        {/* Tambahkan informasi tambahan dari data stasiun pengisian */}
                        <p>Rating: {data.rating}</p>

                        {/* Tambahkan tautan ke Google Maps */}
                        {/* <a href={data.place_link} target="_blank" rel="noopener noreferrer">View on Google Maps</a> */}
                        {/* Tambahkan tautan ke website stasiun pengisian */}
                    </div>
                        <p>Address: {data.formatted_address}</p>
                        <img
                            src={data.photo}
                            alt={data.name}
                        />
                    </div>
                </>
            ) : (
                <p className='loading'>Loading...</p>
            )}
        </div>
    );
};

export default Card;
