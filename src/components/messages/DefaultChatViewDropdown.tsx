import React, { useState } from 'react';
import ArrowDown from './svg/arrow-down.svg';
import ArrowUp from './svg/arrow-up.svg';
import CheckIcon from './svg/check-icon.svg';
import ChatScreen from './ChatScreen';

const viewOptions = ['Default view', 'Focused view', 'FullScreen view'];
type chartViewProps = {
  chartScreenView: string | undefined;
  setChartScreenView: React.Dispatch<React.SetStateAction<string>>;
};
const DefaultChatViewDropdown = ({
  chartScreenView,
  setChartScreenView
}: chartViewProps) => {
  const [chatView, setChatView] = useState(false);
  const [selectedChatView, setSelectedChatView] = useState('Default view');
  const [selectedState, setSelectedState] = useState('');
  const handleSelectedOption = (items: string) => {
    console.log('>>>>items', items);

    setSelectedChatView(items);
    console.log('>>>>SelectedChatView', selectedChatView);

    setSelectedState(items);
    console.log('##### selectedState', selectedState);

    setChartScreenView(items);
    console.log('>>>>ChartScreenView', chartScreenView);

    setChatView(false);  
  };
  return (
    <div className='relative'>
      <div
        className='flex cursor-pointer text-[14px] font-normal leading-none text-neutral-400'
        onClick={() => setChatView(!chatView)}
      >
        {selectedChatView.length > 1 ? selectedChatView : 'Default view'}
        <div className='ml-1'>{chatView ? <ArrowUp /> : <ArrowDown />}</div>
      </div>
      {chatView && (
        <div className='absolute right-0 top-[100%] mt-2 inline-flex h-[130px] w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
          <div className='flex-col items-center self-stretch justify-start gap-2 cursor-pointer '>
            {viewOptions.map((items) => {
              return (
                <div
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
      
      {/* <ChatScreen
      chatView={chatView}
      setChatView={setChatView} /> */}
    </div>
  );
};

export default DefaultChatViewDropdown;
