import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
    return (
        <div>
        <div className="full-bg">
            <h1>Welcome to Techsimplified</h1>
            <nav>
                <Link to="/html" className="nav-link">HTML</Link>
                <Link to="/css" className="nav-link">CSS</Link>
                <Link to="/javascript" className="nav-link">JAVASCRIPT</Link>
                <Link to="/reactjs" className="nav-link">REACT</Link>
                <Link to="/angular" className="nav-link">ANGULAR</Link>
                <Link to="/python" className="nav-link">PYTHON</Link>
                <Link to="/java" className="nav-link">JAVA</Link>
                <Link to="/csharp" className="nav-link">C#</Link>
                <Link to="/dsa" className="nav-link">DSA</Link>
                <Link to="/sql" className="nav-link">SQL</Link>
                <Link to="/mongodb" className="nav-link">MONGODB</Link>
                <Link to="/django" className="nav-link">DJANGO</Link>
                <Link to="/powerbi" className="nav-link">POWERBI</Link>
                <Link to="/numpy" className="nav-link">NUMPY</Link>
                <Link to="/pandas" className="nav-link">PANDAS</Link>
                <Link to="/git" className="nav-link">GIT</Link>
                <Link to="/excel" className="nav-link">EXCEL</Link>
            </nav>
           
        </div>
        
        
        </div>
    );
}

export default Home;
