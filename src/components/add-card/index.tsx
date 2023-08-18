import React, { useState } from 'react';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import DeleteModal from './DeleteModal';
import AddCardForm from './AddCardForm';
import DefaultAddCard from './DefaultAddCard';
import LatestTransactions from './LatestTransactions';

const AddCard = () => {
  const tabContent = ['Add card', 'Latest transactions'];
  const [activeListTab, setActiveListTab] = useState('Add card');
  const [deleteCardState, setDeleteCardState] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [showErrorPage, setShowErrorPage] = useState(false);

  const handleExploreSelected = (e: any) => {
    //setExploreSelected(e.target.innerText);
    setActiveListTab(e.target.innerText);
  };
  return (
    <>
      <div className='flex'>
        <div className='h-full w-full border-r border-white/[0.08] bg-[#121212]'>
          <div className='w-full border-b border-white/[0.08] px-8 pb-[14px] pt-[18px]'>
            <div className='flex gap-3'>
              {tabContent.map((items, index) => {
                return (
                  <div
                    key={index}
                    onClick={(e) => handleExploreSelected(e)} 
                    className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${
                      activeListTab === items
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
          {showSuccessPage ? (
            <SuccessPage closeSuccessPage={setShowSuccessPage} />
          ) : showErrorPage ? (
            <ErrorPage closeErrorPage={setShowErrorPage} />
          ) : activeListTab === 'Add card' ? (
            <AddCardForm
              showSucess={setShowSuccessPage}
              showError={setShowErrorPage}
            />
          ) : (
            <LatestTransactions />
          )}
        </div>
        {activeListTab === 'Add card' ? (
          <DefaultAddCard
            showSuccessPage={showSuccessPage}
            showErrorPage={showErrorPage}
          />
        ) : <DefaultAddCard 
        showSuccessPage={showSuccessPage}
        showErrorPage={showErrorPage}/>
        }
      </div>

      <p onClick={() => setDeleteCardState(true)}>delete card</p>
      {deleteCardState && <DeleteModal closeDeleteModal={setDeleteCardState} />}
    </>
  );
};

export default AddCard;
