import React from 'react'

interface Tooltip{
    Text:string;
    W:number;
}

const Tooltip = ({Text,W}:Tooltip) => {


    return (
        <div className={`absolute -top-10 bg-[#303030] rounded-lg px-3 py-1.5 group-hover:block hidden w-${W}`}>{Text}</div>
    )
}

export default Tooltip