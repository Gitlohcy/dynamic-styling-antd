import React from "react";
import { Layout, Menu, Icon } from "antd";
import './index.less'

const { Header, Sider, Content } = Layout;

class Atoms extends React.Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{
                        minHeight: "100vh"
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        className="sideMenu"
                        // style={{
                        //     minHeight: "100%",
                        //     display: "flex",
                        //     flexFlow: "column nowrap",
                        //     justifyContent: "flex-start"
                        // }}                        
                    >
                        <Menu.Item className="sideMenu-item" key="1">
                            <Icon type="user" />
                            <span>Buttons</span>
                        </Menu.Item>
                        <Menu.Item className="sideMenu-item" key="2">
                            <Icon type="video-camera" />
                            <span>Radios</span>
                        </Menu.Item>
                        <Menu.Item className="sideMenu-item" key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                        <Menu.Item className="sideMenu-item last-item" key="10" onClick={this.toggle}
                            // style={{
                            //     marginTop: "auto"
                            // }}
                        >
                            <Icon
                                className="trigger"
                                type={
                                    this.state.collapsed
                                        ? "menu-unfold"
                                        : "menu-fold"
                                }
                            />
                            <span>Trigger</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            background: "#fff",
                            padding: 0,
                            minHeight: "10vh"
                        }}
                    ></Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            background: "#fff",
                            minHeight: "80vh"
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Atoms;
