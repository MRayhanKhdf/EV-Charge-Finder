import React from "react";
import "./index.css";

export default function Modal({ isShow, data, onCancel }) {
    return (
        <div className={`modal ${isShow ? "visible" : "hidden"}`} data-cy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal-content">
                {data && data.i && data.i.imageUrl ? (
                    <img src={data.i.imageUrl} alt="sesuatu" />
                ) : (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"></img>
                )}
            </div>
            <div className="modal-info">
                {data && data.l ? (
                    <h3>{data.l}</h3>
                ) : (
                    <p>No title available</p>
                )}
                <p>{data && data.q}</p>
                <p>{data && data.rank}</p>
                <p>{data && data.s}</p>
                <p>{data && data.y}</p>
            </div>
        </div>
    );
}
