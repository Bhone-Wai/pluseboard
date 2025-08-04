import {CurrentUser} from "./current-user";
import {Layout} from "antd";
import React from "react";

export function Header() {
    const headerStyles: React.CSSProperties = {
        backgroundColor: '#fff',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 999,
    }

    return (
        <Layout.Header style={headerStyles}>
            <CurrentUser />
        </Layout.Header>
    );
}