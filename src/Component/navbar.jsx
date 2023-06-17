import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const style = {
        div: {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "gray",
            width: "100%",
            padding: "16px"
        },
        heading: {
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold"
        }
    };
    const {user, logout} = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch ( error) {
            console.log(error)
        }
    }

    return (
        <div style={style.div}>
            <h1 style={style.heading}>Quran</h1>
            {user?.displayName ? <button onClick={handleLogout}>Logout</button> : <Link to='/signin'>Sign in</Link>}
        </div>
    );
};

export default Navbar;
