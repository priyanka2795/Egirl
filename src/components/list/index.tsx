import React,{useState} from 'react'
import SubscriptionOptions from './SubscriptionOptions'
import DefaultTab from '@components/common/DefaultTab'
import CollectionOptions from './CollectionOptions'
import RemoveProfile from './RemoveProfile'

const ListIndex = () => {
  const [activeListTab, setActiveListTab] = useState("Subscriptions")
  const [removePage, setRemovePage] = useState(false)
  const tabContent = ['Subscriptions', 'Following' , 'Bookmarks' , 'Collections'];
  return (
    <div>
     
      <div onClick={() => setRemovePage(true)}>Remove Page</div>
      {removePage === true ?
        <RemoveProfile/> : 
        <>
         <DefaultTab activeListTab={activeListTab} setActiveTab={setActiveListTab} tabContentArray={tabContent}/>
      <div className="px-8 py-4">
      {activeListTab !== "Collections" ?
     <SubscriptionOptions/> : 
      <CollectionOptions />
     }   
      </div>
        </>
      }
    </div>
  )
}

export default ListIndex
