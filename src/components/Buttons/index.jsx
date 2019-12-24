import React ,{ useState, useMemo, useEffect } from "react"
import { Button } from "antd"
import {removeEmpty} from "@/utils/manObject"

const Btn3 =  ({btnState}) => {

    const [state, setState] = useState({
        index: null,
        type: null,
        shape: null,
        size: null
    })

    useEffect(() => {
        setState(btnState);
    }, [btnState])
    
    const {index, type, shape, size} = state

    const ButtonAntd = useMemo(() => {

        const newState = removeEmpty(state)
        // console.log("newRender for newState", newState);
        
        const handleClick = () => {
            setState({
                index: 0,
                type: "dashed",
                shape: "circle",
                size: "large"
            })
        }
        

        return (
            <Button 
                {...newState} 
                onClick={handleClick}
                >
                    {type} 
            </Button>
        )
    }, [index, type, shape, size])

    
    
    return (
        <div>{ButtonAntd}</div>
    )

}



export default (props) => {
    // console.log('btnprops',props);
    
    const {type, index, size, shape} = props
    const btnState = {
        index,
        type,
        shape,
        size,
    }
    return <Btn3 btnState={btnState}></Btn3>
}