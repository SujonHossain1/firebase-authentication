import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div style={{ height: '100vh'}} className="d-flex justify-content-center align-items-center ">
            <div className="jumbotron col-md-6 rounded text-center">
                <h1>Page Not Found 404</h1>
                <Link to="/">
                    <button className="btn btn-outline-primary my-3">Go To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NoMatch;