import React, {useState} from 'react'
import AddIcon from '@/assets/svgImages/add-icon.svg';
import PenIcon from '@/assets/svgImages/pen-icon.svg';
import DeleteIcon from '@/assets/svgImages/delete-icon.svg';
import EditCollectionModal from './EditCollectionModal';
import DeleteCollection from './DeleteCollection';
import CollectionCoverModal from './CollectionCoverModal';
import NewCollectionModal from './NewCollectionModal';

interface cardDropdownProp{
  closeDropdown?: any;
  collectionId?:number
}
const CardDropdown = ({closeDropdown, collectionId}:cardDropdownProp) => {
    // const [editCollectionState, setEditCollectionState] = useState(false)
    const [newCollectionModal, setNewCollectionModal] = useState(false)
    const [deleteCollectionState , setDeleteCollectionState] = useState(false)
    const [addCollectionState , setAddCollectionState] = useState(false)

    const handleEditCollection = () => {
      // setEditCollectionState(!editCollectionState);
      setNewCollectionModal(!newCollectionModal);
    }

  return (
  <>
    <div className="absolute right-2 top-[66px]"> 
    <div className='flex flex-col items-start justify-start w-[218px] h-max py-2 shadow rounded-2xl bg-[#1A1A1A] overflow-hidden'>
      <div className='flex items-center justify-start gap-2 self-stretch bg-[#1A1A1A] px-4 py-2.5' onClick={handleEditCollection}>
       <PenIcon/>  
        <div className='text-sm font-normal leading-none text-white cursor-pointer shrink grow basis-0'>
          Edit
        </div>
      </div>
      <div className='flex items-center justify-start gap-2 self-stretch bg-[#1A1A1A] px-4 py-2.5  cursor-pointer' onClick={() => setAddCollectionState(!addCollectionState)}>
        <AddIcon/>
        <div className='text-sm font-normal leading-none text-white shrink grow basis-0'>
          Add to collection
        </div>
      </div>
      <div className='flex items-center justify-start gap-2 self-stretch bg-[#1A1A1A] px-4 py-2.5  cursor-pointer' onClick={() => setDeleteCollectionState(!deleteCollectionState)}>
       <DeleteIcon/>
        <div className='text-sm font-normal leading-none text-red-500 shrink grow basis-0'>
          Delete
        </div>
      </div>
    </div>
  </div>
  {
    newCollectionModal &&
    <NewCollectionModal closeModalItem={setNewCollectionModal} closeDropdown={closeDropdown} />
  }
  {/* {
    editCollectionState &&
    <EditCollectionModal closeEditModal={setEditCollectionState} closeDropdown={closeDropdown}/>
  } */}
  {
    deleteCollectionState &&
    <DeleteCollection closeDeleteModal={setDeleteCollectionState} closeDropdown={closeDropdown}/>
  }
  {addCollectionState &&
    <CollectionCoverModal closeAddCollectionModal={setAddCollectionState} closeDropdown={closeDropdown} collectionId={collectionId} />
  }
  </>
  )
}

export default CardDropdown
