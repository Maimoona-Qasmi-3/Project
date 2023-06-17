import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const style = {
        heading: {
            textAlign: "center",
            fontSize: "3xl",
            fontWeight: "bold",
            paddingTop: "8px",
        },
        container: {
            maxWidth: "240px",
            margin: "auto",
            paddingTop: "4px",
        },
    };

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
  if (user != null) {
    navigate('/account');
  }
}, [user, navigate]);




    return (
        <div>
            <h1 style={style.heading}>Sign in</h1>
            <div style={style.container}>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
    );
};

export default Signin;
