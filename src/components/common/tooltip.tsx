import React from 'react'

interface Tooltip{
    Text:string;
}

const Tooltip = ({Text,}:Tooltip) => {


    return (
        <div className={`absolute -top-10 bg-[#303030] rounded-lg px-3 py-1.5 group-hover:block hidden w-max tooltip z-50`}>{Text}</div>
    )
}

export default Tooltip