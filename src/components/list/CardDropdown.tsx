import React, {useState} from 'react'
import AddIcon from '../../../public/assets/svgImages/add-icon.svg';
import PenIcon from '../../../public/assets/svgImages/pen-icon.svg';
import DeleteIcon from '../../../public/assets/svgImages/delete-icon.svg';
import EditCollectionModal from './EditCollectionModal';
import DeleteCollection from './DeleteCollection';
import CollectionCoverModal from './CollectionCoverModal';

const CardDropdown = () => {
    const [editCollectionState, setEditCollectionState] = useState(false)
    const [deleteCollectionState , setDeleteCollectionState] = useState(false)
    const [addCollectionState , setAddCollectionState] = useState(false)
  return (<>
    <div className="absolute right-2 top-[66px]">
    <div className='flex flex-col items-start justify-start w-[218px] h-max py-2 shadow rounded-2xl bg-[#1A1A1A] overflow-hidden'>
      <div className='flex items-center justify-start gap-2 self-stretch bg-[#1A1A1A] px-4 py-2.5' onClick={() => setEditCollectionState(!editCollectionState)}>
       <PenIcon/>
        <div className='text-sm font-normal leading-none text-white cursor-pointer shrink grow basis-0'>
          Edit
        </div>
      </div>
      {/* <div className='flex items-center justify-start gap-2 self-stretch bg-[#1A1A1A] px-4 py-2.5  cursor-pointer' onClick={() => setAddCollectionState(!addCollectionState)}>
        <AddIcon/>
        <div className='text-sm font-normal leading-none text-white shrink grow basis-0'>
          Add to collection
        </div>
      </div> */}
      <div className='flex items-center justify-start gap-2 self-stretch bg-[#1A1A1A] px-4 py-2.5  cursor-pointer' onClick={() => setDeleteCollectionState(!deleteCollectionState)}>
       <DeleteIcon/>
        <div className='text-sm font-normal leading-none text-red-500 shrink grow basis-0'>
          Delete
        </div>
      </div>
    </div>
  </div>
  {
    editCollectionState &&
    <EditCollectionModal closeEditModal={setEditCollectionState} />
  }
  {
    deleteCollectionState &&
    <DeleteCollection closeDeleteModal={setDeleteCollectionState} />
  }
  {addCollectionState &&
    <CollectionCoverModal closeAddCollectionModal={setAddCollectionState}/>
  }
  </>
  )
}

export default CardDropdown
