export interface DeleteQueue extends Array<number> {
    [index: number]: number
}

export interface IBoxHandler {
    pushDeleteQueue: (props: IBox) => void,
    clearDeleteQueue: () => void,
    getDeleteQueue: () => DeleteQueue,
    deleteTimeout: number,
    render: () => void,
    getPrevDeleteQueue: () => DeleteQueue,
}

export interface IBox {
    data: number,
    maxLength: number,
    id: number,
    isClick: number,
    boxHandler: IBoxHandler,
    curLength: number,
}


