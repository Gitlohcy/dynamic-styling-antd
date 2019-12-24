import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

export default () => {
    return (
        <Header
            style={{
                background: "yellow",
                padding: 0,
                minHeight: "10vh"
            }}
        >
            Header
        </Header>
    );
};
