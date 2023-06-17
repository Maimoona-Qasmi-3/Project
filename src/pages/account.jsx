import React from "react";
import { UserAuth } from "../context/AuthContext";
import Table from "../Component/Table";

const Account = () => {
    const style = {
        div: {
            width: "300px",
            margin: "auto",
        },
        heading: {
            textAlign: "center",
            fontSize: "2xl",
            fontWeight: "bold",
            paddingTop: "12",
        },
        button: {
            border: "1px solid",
            padding: "2",
            marginTop: "10",
        },
    };
    const {logout, user} = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch ( error) {
            console.log(error)
        }
    }
    var array  = [] ;
for(var i = 1; i <= 30; i++){
    array.push(i);
}
    return (
        <div style={style.div}>
            <h1 style={style.heading}>Account</h1>
            <div>
                <p>Welcome, {user?.displayName}</p>
            </div>
            <button onClick={handleLogout} style={style.button}>Logout</button>
            <div>
                <ul>
                {array.map((content, index) => {
                    return  <Table key={index} num={content}/>
                })}
                </ul>
            </div>
        </div>
    );
};

export default Account;
