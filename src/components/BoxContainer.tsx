import {useState } from 'react';
import Box from './Box.tsx'
import {IBox, DeleteQueue} from "./interface.tsx"

function BoxContainer(){
    const [curLength, setCurLength] = useState(0);
    const data = [[1], [1], [[1]], [1], [[[[[1]]]]], 1, [1], [[1]], [1]];
    let boxes: Array<number> = data.flat(10);
    let length: number = boxes.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
    let deleteQueue: Array<number> = [];
    let prevDeleteQueue: Array<number> = [];
    let deleteTimeout: number = 200;
    let canClear: boolean = true;

    function pushDeleteQueue(props:IBox): void{
        deleteQueue.push(props.id);
        console.log(deleteQueue);
    }

    function clearDeleteQueue(): void{
        prevDeleteQueue = deleteQueue;
        deleteQueue = [];
    }

    function getDeleteQueue(): DeleteQueue{
        return deleteQueue;
    }

    function getPrevDeleteQueue(): DeleteQueue{
        return prevDeleteQueue;
    }

    function render(): void{
        //if(canClear){
            clearDeleteQueue();
            setCurLength(deleteQueue.length);
        //}
        //canClear = false;
        //setTimeout(()=> {
        //    canClear = true
        //}, deleteTimeout * length);
    }

    let boxHandler = { pushDeleteQueue, clearDeleteQueue, deleteTimeout, getDeleteQueue, render, getPrevDeleteQueue}

    return (
        <>
        <div className="boxContainer">
        {boxes.map((data: number, index:number) => <Box data={data} id={index} maxLength={length} boxHandler={boxHandler} isClick={0} curLength={curLength}/>)}
        </div>
        </>
    )
}

export default BoxContainer

