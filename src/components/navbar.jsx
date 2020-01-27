import Modal from './modal';
import React, { useState } from 'react';
import '../styles/navbar.scss';

function Navbar() {
    const [modalShowHide, setModalShowHide] = useState("init")
    return(
        <>
            <div className="navbar">
                <div>
                    <button onClick={() => setModalShowHide(true)}>OpenModal</button>
                </div>
            </div>
            <Modal open={modalShowHide} close={() => setModalShowHide(false)}/>
        </>
    )
}

export default Navbar;