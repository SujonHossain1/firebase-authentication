import React from 'react';
import Product from '../Product/Product';
import data from '../Data/Data.json';

const Services = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(product => <Product product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default Services;