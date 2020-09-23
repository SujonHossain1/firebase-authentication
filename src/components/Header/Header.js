import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link class="navbar-brand" to="/"> <b>Welcome Firebase</b> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="nav-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <Link class="nav-link" to="/home"> <b>Home</b> </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/service"> <b>Service</b> </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/inventory"> <b>Inventory</b> </Link>
                        </li>
                        <Link to="/login" class="btn btn-outline-success my-2 my-sm-0" type="submit">Join Now</Link> 
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;