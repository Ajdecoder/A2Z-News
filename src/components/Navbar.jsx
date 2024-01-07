import React from 'react';
import SearchBar from './SearchBar';


export const Navbar = ({ setCategory, onSearch }) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <span className="badge bg-dark text-light rounded-circle">A2Z</span>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("general")}>
                                Home
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("india")}>
                                My India
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("entertainment")}>
                                Entertainment
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("health")}>
                                Health
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("tech")}>
                                Tech
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("education")}>
                                Education
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("robotics")}>
                                Robotics
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("tourism")}>
                                Tourism
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("Automobiles")}>
                                Automobiles
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("Environment")}>
                                Environment
                            </div>
                        </li>

                    </ul>

                    <SearchBar onSearch={onSearch} />
                </div>
            </nav>
        </div>
    );
};

