import {useState } from 'react';

interface IBox {
    data: number
}

function Box(props:IBox){
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(props.data);

    let boxStyle = {
        opacity: value ? 1 : 0,
        pointerEvents:  value ? "auto" : "none",
    }

    function handleClick(){
        console.log(count, value);
        setValue((value:number) => value + 1)
        setCount((count) => count + 1);
    }

    return ( 
        <button style={boxStyle} className="box" onClick={handleClick}>{count}</button>
    )
}

export default Box

