import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user)

    const handelSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-3xl">Awesome UI</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>welcome, {user.email}</span>}
                {user?.email ? <button onClick={handelSignOut} className="btn btn-sm mx-2">Log-out</button> :
                    <Link to='login'><button className="btn btn-sm mx-2">Log-In</button> </Link>}
            </div>
        </div>
    );
};

export default Header;