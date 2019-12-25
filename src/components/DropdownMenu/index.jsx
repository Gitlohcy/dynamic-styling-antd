import React, { useState } from 'react'
import { Menu, Dropdown, Icon, Button } from "antd";

export default (props) => {

    const [currentItem, setCurrentItem] = useState("Default")
    const {title, index, items, setChange} = props

    const handleSelectItem = (e,title,index,setChange,setCurrentItem) => {

        const itemInfo = {}
        itemInfo[title] = e.key;
        itemInfo.key = index

        setCurrentItem(e.key);
        setChange(itemInfo);

    }

    const pickSelectItem = curryHandler(handleSelectItem)(title, index, setChange, setCurrentItem)

    const menu = (
        <Menu onClick={pickSelectItem}>
            {
                Object.values(items)
                    .map(ele => (
                        <Menu.Item key={ele}>{ele}</Menu.Item>
                    )) 
            }
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <Button>
                {currentItem} <Icon type="down" />
            </Button>
        </Dropdown>
    );
};


function curryHandler(eventHandler){

    return (title, index, setChange, setCurrentItem) =>
        event => { eventHandler(event,title,index,setChange,setCurrentItem) }

}
