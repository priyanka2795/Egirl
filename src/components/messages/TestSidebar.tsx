// ResizableSidebar.tsx
import React, { useState, useRef, useEffect } from 'react';

const ResizableSidebar: React.FC = () => {
  const [isDragging, setDragging] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(500);
  const [newWidth, setNewWidth] = useState<number>(500);
  const [changeWidth, setChangeWidth] = useState<boolean>(false);

  const resizerRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent): void => {
    setDragging(true);
  };

  const handleMouseUp = (): void => {
    setDragging(false);

    if (changeWidth && sidebarWidth == 500) {
      setSidebarWidth(200);
    } else if (changeWidth && sidebarWidth == 200) {
      setSidebarWidth(500);
    }
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !sidebarRef.current) return;
    const dx = e.clientX - sidebarRef.current.getBoundingClientRect().right;
    console.log('dx: ', dx);

    if (sidebarWidth == 500 && dx < 0) {
      console.log('change wid');
      setChangeWidth(true);
    } else if (sidebarWidth == 200 && dx > 0) {
      console.log('change wid');
      setChangeWidth(true);
    } else {
      console.log('not!');
      setChangeWidth(false);
    }
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e);
    const mouseUpHandler = () => handleMouseUp();

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    // Add this section
    if (isDragging) {
      document.body.style.cursor = 'col-resize';
    } else {
      document.body.style.cursor = 'auto';
    }

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [isDragging, sidebarWidth]);

  return (
    <div className='flex h-full w-full select-none bg-white'>
      <div
        className={`relative h-full overflow-x-hidden bg-gray-300 transition-all duration-300`}
        ref={sidebarRef}
        style={{ width: `${sidebarWidth}px` }}
      >
        <div
          className={`${
            isDragging ? 'bg-blue-400' : 'bg-green-400'
          } hover:bg-blue-400b absolute -top-[1px] right-0 h-full w-1 cursor-col-resize transition duration-100`}
          ref={resizerRef}
          onMouseDown={handleMouseDown}
        ></div>
        <div className='bg-white p-5'>
          <h3 className='text-blue-700'>Sidebar Menu</h3>
        </div>
        <ul className='space-y-2 px-2 py-3'>{/* Your sidebar menu list */}</ul>
      </div>
      <div className='flex-grow bg-gray-800 p-8 text-center'>
        {/* Your resizable sidebar content */}
        content
      </div>
    </div>
  );
};

export default ResizableSidebar;
