
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Shipment = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = (data, event) => {
        const { name } = data;
        alert("Thank you " + name + " for purses");
        
        event.target.reset();
        setTimeout(() => {
            history.push('/home');
        }, 3000);
    };

    return (
        <div className="container jumbotron w-75 mx-auto my-3">
            <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                <h4 className="my-3">Shipment Information</h4>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        type="text"
                        name="name"
                        className="form-control my-2"
                        placeholder="Your Name"
                        defaultValue={loggedInUser.name}
                    />
                    {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                </div>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        type="email"
                        name="email"
                        className="form-control my-2"
                        placeholder="Email Address"
                        defaultValue={loggedInUser.email}
                    />
                    {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                </div>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        type="text"
                        name="zipState"
                        className="form-control my-2"
                        placeholder="Zip Code & State"
                        defaultValue=""
                    />
                    {errors.zipState && <span style={{ color: 'red' }}> Zip Code & State  is required</span>}
                </div>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        type="text"
                        name="address"
                        className="form-control my-2"
                        placeholder="Address"
                        defaultValue=""
                    />
                    {errors.address && <span style={{ color: 'red' }}> Address  is required</span>}
                </div>
                <button type="submit" className="btn btn-success">Shipment</button>
            </form>
        </div>
    );
};

export default Shipment;




