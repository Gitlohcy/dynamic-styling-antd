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
    const [columns, setColumns] = useState([]);
    const [tableData, setTableData] = useState(initTableData(properties));
    const [change, setChange] = useState({ key: null});

    const prevData = useRef(tableData);

    console.log('rerender Btn module');
    

    useEffect(() => {

        const mainComponent = mapComponent()
        const PropArr = mapProperties(properties, setChange)

        const colSettings = [...mainComponent, ...PropArr]
        setColumns(colSettings)

    }, [properties])


    useEffect(() => {

        //if "ommited" is set in properties , used with mergePreSetting
        const verifySetting = chainChecking(omitDefault,removeEmpty)

        setTableData(
            getSelectedItems(change, prevData)
            // mergePreSetting(prevData,change,tableData,verifySetting)
        )
        
    }, [change])

    useEffect(() => {
        prevData.current = tableData
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
const initTableData = (properties) => {
    return properties.type.map( (type,index) => ({
        key: index,
        type
    }))
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

const omitDefault = obj => {
    const newObj = {};

    for (let [key, value] of Object.entries(obj)) {
        if (obj[key] && typeof obj[key] === "object")
            newObj[key] = removeEmpty(obj[key]); // recurse
        else if(value !== "default" && value !== "omitted"){
            newObj[key] = obj[key]
        }
    }

    return newObj
}

const chainChecking = ( check1, check2) => {
    return obj => check1(check2(obj)) 
}

function mergePreSetting(prevData,newSetting,tableData,verifySetting){
            
    const cleanedSetting = verifySetting(newSetting);

    return prevData.current.length > 0 
        ? (prevData.current.map( (value,index) => {
                if(cleanedSetting.key === index)
                    return Object.assign(value, cleanedSetting)

                return value
            })
        )
        : (tableData)

}

//return a new Array with {key:index , type } + ( { possible settings} && { prev setting }
function getSelectedItems(selectedItem,prevData){
            
    const cleanedItems = removeEmpty(selectedItem);
    
    return properties.type.map((type, currentIndex) => {

        const primaryData = {
            key: currentIndex,
            type
        }

        return (prevData.current.length > 0 )
            ?(  
                (cleanedItems.key === currentIndex)
                    ? Object.assign(prevData.current[currentIndex], cleanedItems)
                    : prevData.current[currentIndex]
            ): primaryData

    })
}

export default Buttons;


