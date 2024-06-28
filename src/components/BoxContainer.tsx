import {useState, useEffect } from 'react';
import Box from './Box.tsx'
import {IBox, DeleteQueue} from "./interface.tsx"

function BoxContainer(){
    const [curLength, setCurLength] = useState(0);
    const [deleteQueue ,setDeleteQueue] = useState<Array<number>>([]);

    const data = [[1], [1], [[1]], [1], [[[[[1]]]]], 1, [1], [[1]], [1]];
    let boxes: Array<number> = data.flat(10);
    let length: number = boxes.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
    //let deleteQueue: Array<number> = [];
    let prevDeleteQueue: Array<number> = [];
    let deleteTimeout: number = 200;
    let canClear: boolean = true;

    function pushDeleteQueue(props:IBox): void{
        prevDeleteQueue = deleteQueue;
        //deleteQueue.push(props.id);
        setDeleteQueue((prev) => [...prev, props.id]);
        console.log(deleteQueue);
        if(deleteQueue.length == length){
            console.log(`Max length id : ${props.id}`);
            render();
            console.log(`Cur length: ${curLength}`);
        }
    }

    //useEffect(()=>{
    //    console.log(`Effect: ${curLength} `);
    //},[curLength])

    function clearDeleteQueue(): void{
        prevDeleteQueue = deleteQueue;
        setDeleteQueue([]);
        //deleteQueue = [];
    }

    function getDeleteQueue(): DeleteQueue{
        return deleteQueue;
    }


    function getPrevDeleteQueue(): DeleteQueue{
        return prevDeleteQueue;
    }

    function render(): void{
        //if(canClear){
            setCurLength(deleteQueue.length);
            clearDeleteQueue();
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
        {boxes.map((data: number, index:number) => 
            <Box data={data}
                id={index}
                maxLength={length}
                boxHandler={boxHandler} 
                isClick={0} 
                curLength={curLength} 
                key={index}
                prevDeleteQueue={deleteQueue}/>
        )}
        </div>
        </>
    )
}

export default BoxContainer

