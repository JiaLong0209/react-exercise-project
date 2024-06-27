//import styled from 'styled-components';
import {useState } from 'react';
import {IBox} from "./interface";

function Box(props:IBox){
    const [isClick, setIsClick] = useState(0);
    const [canClick, setCanClick] = useState(true);
    const value = props.data;
    //let canClick = true;


    console.log(`${props.id}, can: ${canClick}`)
    let boxStyle = {
        opacity: value ? 1 : 0,
        pointerEvents:  value && canClick ? "auto" : "none",
        background: isClick ? "#000" : "#222",
        boxShadow: isClick ? "0px 0px 5px 0px #3f35, 0px 0px 10px 2px #f3f, 0px 0px 23px 7px #f83, 0px 0px 41px 18px #a00" : "",
        outline: "none",
        border: isClick ? "#222 solid 1px" : "#333 solid 3px",
    }
    
    function handleClick(): void {
        if(isClick) return;
        setCanClick(false);
        setIsClick(1);
        props.boxHandler.pushDeleteQueue(props);
    }


        //document.activeElement.blur();
    console.log(`id: ${props.id}, cur: ${props.curLength}`);
    if(props.boxHandler.getDeleteQueue().length == props.maxLength){
        console.log(`before: ${props.boxHandler.getDeleteQueue()}`)
        props.boxHandler.render();
        console.log(`after: ${props.boxHandler.getDeleteQueue()}`)

    }

    console.log(`prev: ${props.boxHandler.getPrevDeleteQueue()}`)
    if(props.boxHandler.getPrevDeleteQueue().length == props.maxLength){
        console.log(`Prev Max: ${props.id}`)
        let index = props.boxHandler.getPrevDeleteQueue().findIndex(i => i == props.id);

        setTimeout(() => {
            setIsClick(0);
        }, props.boxHandler.deleteTimeout * (index + 1));

        setTimeout(() => {
            setCanClick(true);
        }, props.boxHandler.deleteTimeout * length);
    }

    return ( 
        <button style={boxStyle} className="box" onClick={handleClick}>{isClick}</button>
    )
}

export default Box

