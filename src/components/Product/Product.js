import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { title, balance, about } = product;
    return (
        <div className="col-md-6">
            <div className="card text-center my-4">
                <div className="card-header">
                    Featured
            </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {about} </p>
                    <p>Price: ${balance} </p>
                    <Link to="/shipment" className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;