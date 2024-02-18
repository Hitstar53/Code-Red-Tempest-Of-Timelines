import React from "react";
import './CardModule.css';
import {Left} from './Left.jsx'
import { Right } from "./Right.jsx";

export const Card =() => {
    return (
        <React.Fragment>
            <div className="card">
                < Left />
                < Right/>
            </div>
        </React.Fragment>
    );
};

