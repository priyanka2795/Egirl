import React,{useState} from 'react'
import GalleryFilter from './GalleryFilter'
import ListTab from './ListTab'


const ListIndex = () => {
  const [activeListTab, setActiveListTab] = useState("Subscriptions")
  return (
    <div>
     <ListTab activeListTab={activeListTab} setActiveTab={setActiveListTab}/>
     {activeListTab === "Subscriptions" ?
     <GalleryFilter/> : 
     null
     }
     
    </div>
  )
}

export default ListIndex
