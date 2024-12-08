import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/student.css';
import Navbar from './Navbar';

const StudentDashboard = () => {
    return (
        <>
        <Navbar/>
            <div className="main-content">
                <h2>Student Dashboard!</h2>
                
                <div className="dashboard-buttons">
                    <Link to="/view-assignments" className="dashboard-button">View Assignments</Link>
                    <Link to="/my-grades" className="dashboard-button">View Grades</Link>
                    
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;