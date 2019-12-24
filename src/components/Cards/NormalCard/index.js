import React from 'react'
import './index.less'

const NormalCard = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default NormalCard
