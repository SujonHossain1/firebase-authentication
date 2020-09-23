import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser] = useContext(UserContext);
    let imgStyle = { height: "", width: "" }

    if (loggedInUser.photo) {
        imgStyle = {
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            border: "2px solid gray"
        }
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link class="navbar-brand" to="/"> <b>Welcome Firebase</b> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="nav-collapse">
                    <ul class={loggedInUser.isSignIn ? "navbar-nav mr-auto" : "navbar-nav ml-auto"}>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/home"> Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/service">Service </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/inventory"> Inventory </Link>
                        </li>
                        <li class="nav-item" style={{ paddingRight: "8px", marginTop: '8px' }}>
                            <Link to="/login" class="btn btn-outline-success btn-sm my-2 my-sm-0 " type="submit">Join Now</Link>
                        </li>

                    </ul>
                    <div className={loggedInUser.isSignIn && "navbar-nav ml-auto" }>
                        <div class="nav-item" style={{ paddingRight: "8px", marginTop: '8px' }}>
                            <img
                                style={imgStyle}
                                src={loggedInUser.photo}
                                alt=""
                            />
                        </div>
                        <div class="nav-item">
                            <h5 style={{marginTop: "5px"}} class="nav-link"> {loggedInUser.name} </h5>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;