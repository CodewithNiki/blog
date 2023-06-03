import React from "react";
import Navbar from "./Navbar";

export default function Layout(props) {
    return (
        <div>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}