import React from "react";

import './itemSection.css'
export default function ItemSection(props) {
    return (
        <div className="border-image1 position-relative m-4 spinner">
            <div className="spinner-item"></div>
            <div className="spinner-item"></div>
            <div className="spinner-item"></div>
            <div className="data-info">
                <div className="text-center">
                    <div><img src={props.src} alt = "" width={50} /></div>
                    <div className="title fw-600">{props.title}</div>
                    <div className="cnt fw-700">{props.cnt}</div>
                </div>
            </div>

        </div>
    );
}
