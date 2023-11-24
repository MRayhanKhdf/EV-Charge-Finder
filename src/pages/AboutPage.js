import React from 'react';
import "./about.css";
export default function AboutPage() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">About Us</h1>
                            <button className="btn profile-settings-btn" aria-label="profile settings">
                                <i className="fas fa-cog" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="profile-bio">
                            <p>
                                <span className="profile-real-name">Hellooowwww~~~</span>  Saya Rayhan disini membuat TA PBB dengan menggunakan API dari RapidAPI EV Charger Finder dengan basis file dari modul 6 yaitu menggunakan PWA
                            </p>
                        </div>
                    </div>
                    {/* End of profile section */}
                </div>
                {/* End of container */}
            </header>
        </>
    );
}
