import React, { useState, useEffect, useRef } from "react";
import properties from "./properties";
import {removeEmpty} from "@/utils/manObject"
import {upperFirstChar} from "@/utils/manString"
import "antd/dist/antd.css";
import "./index.less";
import { Table } from "antd";


import AntdBtn from "@/components/Buttons"
import DropdownMenu from "@/components/DropdownMenu"


const Buttons = () => {
    const [btnState, setBtnState] = useState([]);
    const [columns, setColumns] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [change, setChange] = useState({ index: 0});

    const prevData = useRef(tableData);

    
    console.log('rerender btn module');
    

    useEffect(() => {

        initButtonState(properties,setBtnState)

    }, [properties])

    useEffect(() => {

        const mainComponent = mapComponent()
        const PropArr = mapProperties(properties, setChange)

        const colSettings = [...mainComponent, ...PropArr]
        setColumns(colSettings)

    }, [btnState, properties])

    

    useEffect(() => {
        
        //return a new Array with {key:index , type } + { possible settings}
        function getSelectedItems(selectedItem){
            
            const cleanedItems = removeEmpty(selectedItem);

            return properties.type.map((type, currentIndex) => {

                const primaryData = {
                    key: currentIndex,
                    type
                }

                if(cleanedItems.index === currentIndex)
                    return Object.assign(primaryData, cleanedItems)

                return primaryData 
            })
        }
        const selectedItem = { index: 0, size: "large" , shape: "circle"}

        

        setTableData(
            getSelectedItems(change)
        )
        
    }, [change])

    useEffect(() => {
        
        console.log('preudate',prevData.current);
        prevData.current = tableData
        console.log('after update',prevData.current);
        
    }, [tableData])

    return (
        <Table
            bordered
            columns={columns}
            dataSource={tableData}
        />
    );

};

//functions in useEffect
const initButtonState = (properties,setBtnState) => {

    setBtnState([]);

    properties.type.map( type => {
        setBtnState( stat =>  
            [  ...stat,
                {
                    type, 
                    shape:null,
                    size:null
                }
            ])
    })
    
}

const mapComponent = () => [{
    title: "Component",
    key:"component",
    render: (text, record,index) => ( //pass useMemo
        <AntdBtn {...record}  />
    )
}]

const mapProperties = (properties, setChange) => {
    
    
    return Object.keys(properties).map( (key, index) => {
        if(key == "type")
            return {
                title: "Type",
                dataIndex: "type",
                width: 100
            }
        else
            return {
                "title": upperFirstChar(key),
                "dataIndex": key,
                render: (text, record, index) =>    //pass setInfo
                    <DropdownMenu 
                        title={key} 
                        index={index} 
                        items={properties[key]} 
                        setChange={setChange} 
                    />
            }
    })
}

export default Buttons;


