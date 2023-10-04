import React from 'react'

interface Tooltip{
    Text:string;
}

const Tooltip = ({Text,}:Tooltip) => {
    return (
        <div className={` bg-[#303030] rounded-lg px-3 py-1.5 group-hover:block hidden tooltip z-50`}>{Text}</div>
    );
};

export default Tooltip