import React from 'react';
import '../styles/modal.scss';

function Modal(props) {
    return (
        <div className={props.open == "init" ? "modalInit" : props.open ? "show" : "show hide"} onClick={props.close}>
            <div>
                <button onClick={props.close}>Close Modal</button>
            </div>
        </div>
    )
}

export default Modal;