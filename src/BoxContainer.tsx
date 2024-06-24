//import {useState } from 'react';
import Box from './Box.tsx'


function BoxContainer(){
  const data = [[1], [1], [[1]], [1], [[[[[0]]]]], 0, [1], [[1]], [1]];
  let boxes: Array<number> = data.flat(10);

    return (
      <>
        <div className="boxContainer">
            {boxes.map((data: number, index:number) => <Box data={data} key={index}/>)}
        </div>
      </>
    )
}

export default BoxContainer

