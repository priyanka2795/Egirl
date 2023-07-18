import React,{useState} from 'react'
import SubscriptionOptions from './SubscriptionOptions'
import DefaultTab from '@components/common/DefaultTab'
import CollectionOptions from './CollectionOptions'

const ListIndex = () => {
  const [activeListTab, setActiveListTab] = useState("Subscriptions")
  const tabContent = ['Subscriptions', 'Following' , 'Bookmarks' , 'Collections'];
  return (
    <div>
      <DefaultTab activeListTab={activeListTab} setActiveTab={setActiveListTab} tabContentArray={tabContent}/>
      <div className="px-8 py-4">
      {activeListTab !== "Collections" ?
     <SubscriptionOptions/> : 
      <CollectionOptions />
     }   
      </div>
    </div>
  )
}

export default ListIndex
