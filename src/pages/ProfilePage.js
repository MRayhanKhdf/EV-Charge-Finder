import React from 'react';
import "./profile.css";
export default function ProfilePage() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="https://pbs.twimg.com/profile_images/1727218066550038528/sSPB-c6O.jpg" alt="PUTRI KECILKU" />
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">Muhammad Rayhan Khadafi</h1>
                            <button className="btn profile-settings-btn" aria-label="profile settings">
                                <i className="fas fa-cog" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="profile-bio">
                            <p>
                                <span className="profile-real-name">21120121140090</span> TA Praktikum PPB 2023 - Teknik Komputer 2021
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
