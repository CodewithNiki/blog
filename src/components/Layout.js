import React from "react";
import Navbar from "./Navbar";

export default function Layout(props) {
    return (
        <div className=" px-16 py-20 ">
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}