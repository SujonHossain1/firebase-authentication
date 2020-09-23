import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="container jumbotron my-5">
            <h1>Welcome To Firebase Authentication</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos minus ad, vitae exercitationem nam esse odit dignissimos rem illum recusandae? Consectetur excepturi quaerat voluptatibus ipsum dolore sit deserunt accusantium minima!</p>
            <Link to="/service">
                <button className="btn btn-outline-primary my-3">See More</button>
            </Link>
        </div>
    );
};

export default Home;