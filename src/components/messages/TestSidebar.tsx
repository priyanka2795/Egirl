// ResizableSidebar.tsx
import React, { useState, useRef, useEffect } from 'react';

const ResizableSidebar: React.FC = () => {
  const [isDragging, setDragging] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(375);
  const [changeWidth, setChangeWidth] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent): void => {
    setDragging(true);
    document.body.style.cursor = 'col-resize';
  };

  const handleMouseUp = (): void => {
    if (!isDragging) return;
    setDragging(false);
    document.body.style.cursor = 'auto';
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !sidebarRef.current) return;
    const dx = e.clientX - sidebarRef.current.getBoundingClientRect().right;
    const newWidth = sidebarWidth + dx;
    console.log(newWidth);

    if (sidebarWidth == 375 && dx < 0 && newWidth <= 227.5) {
      setSidebarWidth(80);
    } else if (sidebarWidth == 80 && dx > 0 && newWidth >= 227.5) {
      setSidebarWidth(375);
    }
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e);
    const mouseUpHandler = () => handleMouseUp();

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [isDragging, sidebarWidth, changeWidth]);

  return (
    <div className='flex h-full w-full select-none bg-white'>
      <div
        className={`relative h-full overflow-x-hidden bg-red-300 w-[${sidebarWidth}px] `}
        ref={sidebarRef}
        // style={{ width: `${sidebarWidth}px` }}
      >
        <div
          className={`${
            isDragging ? 'bg-blue-400' : 'bg-green-400'
          } absolute -top-[1px] right-0 h-full w-1 cursor-col-resize transition duration-100 hover:bg-blue-400`}
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
