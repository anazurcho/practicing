import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedOut, changeTheme } from "../../store/actions";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ({ userLoggedOut, isAuthenticated, changeTheme }) => {

    const [DarkMode, DarkModeOn] = useState(()=>false);

    if (DarkMode) {
        changeTheme('minty');
    } else {
        changeTheme('journal');
    }

    const logoutHandler = () => {
        userLoggedOut();
    }

    const authUser = isAuthenticated ? null : (
        <React.Fragment>
            <li>
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
        </React.Fragment>
    );

    const authFeatures = isAuthenticated ?
        (
            <React.Fragment>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                <li>
                    <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li>
                    <Link to="/photos" className="nav-link">Photos</Link>
                </li>
                <li className="nav-item" onClick={logoutHandler}>
                    <Link to="/" className="nav-link">Logout</Link>
                </li>
            </React.Fragment>
        ) : null;


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand" href="#">FinalApp</Link>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Main</Link>
                    </li>
                    {authUser}
                    {authFeatures}
                    <DarkModeToggle
                        onChange={DarkModeOn}
                        checked={DarkMode}
                        size={80}
                    />
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
}

const mapDispatchToProps = {
    userLoggedOut, 
    changeTheme
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

