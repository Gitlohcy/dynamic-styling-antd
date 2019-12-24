import React from "react";
import { withRouter } from "react-router";
import { Menu, Icon } from "antd";

export default withRouter(({ history, setCollapsed, collapsed }) => {
    console.log(setCollapsed);
    console.log("History", history);
    const redirect = (history, url) => {
        history.push(url);
    };

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="sideMenu"
        >
            <Menu.Item
                className="sideMenu-item"
                key="1"
                onClick={() => redirect(history, "/atoms/button")}
            >
                <Icon type="user" />
                <span>Buttons</span>
            </Menu.Item>
            <Menu.Item
                className="sideMenu-item"
                key="2"
                onClick={() => redirect(history, "/atoms/radio")}
            >
                <Icon type="video-camera" />
                <span>Radios</span>
            </Menu.Item>
            <Menu.Item
                className="sideMenu-item"
                key="3"
                onClick={() => redirect(history, "/atoms/testApi")}
            >
                <Icon type="upload" />
                <span>nav 3</span>
            </Menu.Item>
            <Menu.Item
                className="sideMenu-item"
                key="4"
                onClick={() => redirect(history, "/atoms/testCount")}
            >
                <Icon type="upload" />
                <span>testCount</span>
            </Menu.Item>
            <Menu.Item
                className="sideMenu-item last-item"
                key="99"
                onClick={() => setCollapsed(!collapsed)}
            >
                <Icon
                    className="trigger"
                    type={collapsed ? "menu-unfold" : "menu-fold"}
                />
                <span>Trigger</span>
            </Menu.Item>
        </Menu>
    );
});
