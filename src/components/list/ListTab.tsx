import React , {useState} from 'react'

const ListTab = () => {
    const tabContent = ['Subscriptions', 'Following' , 'Bookmarks' , 'Collections'];
    const [exploreSelectedTab, setExploreSelected] = useState("Subscriptions");
    const [subLeftModal, setsubLeftModal] = useState(false);

    const handleExploreSelected = (e: any) => {
        setExploreSelected(e.target.innerText);
        // setExploreSelectedTab(e.target.innerText);
      };

  return (
    <div className='border-b border-white border-opacity-10'>
    <div className='flex justify-between px-8 py-4'>
      <div className='flex items-start justify-start gap-3'>
        {tabContent.map((items, index) => {
          return (
            <div
              key={index}
              onClick={(e) => handleExploreSelected(e)}
              className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${
                exploreSelectedTab === items
                  ? ' bg-white bg-opacity-20 text-white  '
                  : 'text-neutral-400'
              }`}
            >
              {items}
            </div>
          );
        })}
      </div>

    
    </div>
  </div>
  )
}

export default ListTab
