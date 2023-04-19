import React from 'react';
// import { useState } from 'react';
import { BsList } from "react-icons/bs";
// import { Button } from 'react-bootstrap';

function Navbar1(props) {
        return (
        <>
            <div className="nav-container">
                <img src="https://play-lh.googleusercontent.com/-q5K1ZqUujbA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnNR1XLWtv1Ozlki_PRYsjMZGBJMg/photo.jpg" alt="error" />
                <div className="userName">                 
                    <h6><b>{props.n}</b></h6>
                </div>
                <button><BsList /></button>
            </div>
        </>
    );
}

export default Navbar1;