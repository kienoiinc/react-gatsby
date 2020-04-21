import React from "react";
import "./layout.css";
import Menu from "./menu";
import Sidebar from "./sidebar";

export default (props) => {
    const children = props.children;
    // Hoặc: const { children } = props;
    return (
        <div className="app">
            <Menu />
            <div className="main">
                <div className="content">{children}</div>
                <div className="sidebar"><Sidebar /></div>
            </div>
        </div>
    )
}