import React, { Component } from 'react';
import './item.css'

const Item = (props) => {

    return (
        <>
            <div className={props.className}>{props.children}</div>

        </>

    )
}


export default Item