import React, {useState} from 'react'
import { Layout } from 'antd'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import Content from './Content'


const { Sider} = Layout

export default () => {
    
    
    const [collapsed, setCollapsed] = useState(true)

    return (
        <Layout 
        >
            <Sider 
            trigger={null}
            collapsible
            collapsed={collapsed}
            className="leftSider"   
            style={{
                height: "90vh"
            }}
            >
                <LeftMenu setCollapsed={setCollapsed} collapsed={collapsed} />
            </Sider>
            <Content />
            <Sider>
                <RightMenu style={{height: "90vh"}}/>
            </Sider>
        </Layout>
    )
}
