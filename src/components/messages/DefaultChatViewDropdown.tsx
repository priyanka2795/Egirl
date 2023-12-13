import React, { useEffect, useRef, useState } from 'react';
import ArrowDown from './svg/arrow-down.svg';
import ArrowUp from './svg/arrow-up.svg';
import CheckIcon from './svg/check-icon.svg';
import ChatScreen from './ChatScreen';

const viewOptions = ['Default view', 'Focused view', 'FullScreen view'];
type chartViewProps = {
  chartScreenView: string | undefined;
  setChartScreenView: any;
  chatView: boolean | undefined;
  setChatView: any;
};
const DefaultChatViewDropdown = ({
  chartScreenView,
  setChartScreenView,
  chatView,
  setChatView
}: chartViewProps) => {
  // const [chatView, setChatView] = useState(false);
  const optionsRef=useRef(null);
  const buttonRef=useRef(null)
  const [selectedChatView, setSelectedChatView] = useState(chartScreenView);
  const [selectedState, setSelectedState] = useState(chartScreenView);
  const handleSelectedOption = (items: string) => {
    // console.log('>>>>items', items);
    if(items === 'FullScreen view'){
      sessionStorage.setItem('sideBarCollapse', 'true');  
    }else{
      sessionStorage.setItem('sideBarCollapse', '');
    }

    setSelectedChatView(items);
    // console.log('>>>>SelectedChatView', selectedChatView);

    setSelectedState(items);
    // console.log('##### selectedState', selectedState);

    setChartScreenView(items);
    // console.log('>>>>ChartScreenView', chartScreenView);

    setChatView("chatView");  
  };

  // useEffect(()=>{
  //   document.addEventListener('mousedown',handleClickOutside);
  //   return ()=>{
  //     document.removeEventListener('mousedown',handleClickOutside)
  //   }
  // },[]);

  // const handleClickOutside=(event:any)=>{
  //   if(optionsRef.current && !optionsRef?.current?.contains(event.target) && buttonRef.current && !buttonRef?.current?.contains(event.target)){
  //     if(chatView){
  //       setChatView('chatView')
  //     }else{
  //       setChatView('Default view')
  //     }
  //   }
  // }
  
  return (
    <div className='relative'>
      <div
       ref={buttonRef}
        className='flex cursor-pointer text-[14px] font-normal leading-none text-neutral-400'
        onClick={() => {setChatView("chatView") }}
      >
        {selectedChatView ? selectedChatView : 'Default view'}
        <div className='ml-1'>{chatView ? <ArrowUp /> : <ArrowDown />}</div>
      </div>
      {chatView && (
        <div ref={optionsRef} className='z-50 absolute right-0 top-[100%] mt-2 inline-flex h-[130px] w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
          <div  className='flex-col items-center self-stretch justify-start gap-2 cursor-pointer'>
            {viewOptions.map((items , index) => {
              return (
                <div key={index}
                  className={`flex shrink grow basis-0 items-center justify-between px-4 py-2.5 text-[14px] font-normal leading-none text-white ${
                    selectedChatView === items ? 'bg-white/10' : ''
                  }`}
                  onClick={(e) => handleSelectedOption(items)}
                >
                  {items}
                  {selectedChatView === items ? <CheckIcon /> : ''}
                </div>
              );
            })}
          </div>
        </div>
      )}
        
    </div>
  );
};

export default DefaultChatViewDropdown;
