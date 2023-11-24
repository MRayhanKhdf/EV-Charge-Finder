import React from 'react';
import { useLocation } from 'react-router-dom';
import "./detail.css";

const DetailPage = () => {
    const location = useLocation();
    const itemData = location.state?.itemData || {};

    return (
        <div className='charge-station-detail'>
            <div className='charge-station'>
                <h1>{itemData.name}</h1>
                <img
                    src={itemData.photo}
                    alt={itemData.name}
                />
                <p>Address: {itemData.formatted_address}</p>
                <p>Phone Number: {itemData.phone_number}</p>
                <p>Rating: {itemData.rating}</p>
                <p>Review Count: {itemData.review_count}</p>
                <p>Website: <a href={itemData.website} target="_blank" rel="noopener noreferrer">{itemData.website}</a></p>
                <p>View on Google Maps: <a href={itemData.place_link} target="_blank" rel="noopener noreferrer">Open Maps</a></p>
            </div>
        </div>
    );
};

export default DetailPage;
