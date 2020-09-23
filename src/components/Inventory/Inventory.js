import React from 'react';
import {Link} from 'react-router-dom';

const Inventory = () => {
    return (
        <div className="container jumbotron my-5">
            <h1>Inventory Coming Soooooooooon .........</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos minus ad, vitae exercitationem nam esse odit dignissimos rem illum recusandae? Consectetur excepturi quaerat voluptatibus ipsum dolore sit deserunt accusantium minima!</p>
            <Link to="/service">
                <button className="btn btn-outline-primary my-3">Go To Home</button>
            </Link>
        </div>
    );
};

export default Inventory;