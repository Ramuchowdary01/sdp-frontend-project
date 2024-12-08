import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/teacher.css';
import Navbar from './Navbar';

const TeacherDashboard = () => {
    return (
        <>
        <Navbar/>
            <div className="main-content">
                <h2>Teacher Dashboard!</h2>
                
                <div className="dashboard-buttons">
                    <Link to="/create-assignment" className="dashboard-button">Create Assignment</Link>
                    <Link to="/view-submissions" className="dashboard-button">View Submissions</Link>
                  
                </div>
            </div>
        </>
    );
};

export default TeacherDashboard;