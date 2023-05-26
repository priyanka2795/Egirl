// ResizableSidebar.tsx
import React, { useState, useRef, useEffect } from 'react';

const ResizableSidebar: React.FC = () => {
  const [isDragging, setDragging] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(500);
  const [newWidth, setNewWidth] = useState<number>(500);

  const resizerRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent): void => {
    setDragging(true);
  };

  const handleMouseUp = (): void => {
    setDragging(false);

    if (sidebarWidth == 500 && newWidth < 450) {
      setSidebarWidth(200);
    } else if (sidebarWidth == 200 && newWidth > 250) {
      setSidebarWidth(500);
    }
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !sidebarRef.current) return;
    const dx = e.clientX - sidebarRef.current.getBoundingClientRect().right;
    const newWidth = sidebarWidth + dx;
    // Limit the sidebar width between 200 and 500 pixels
    // if (newWidth >= 200 && newWidth <= 500) {
    //   setSidebarWidth(newWidth);
    // }
    if (newWidth >= 200 && newWidth <= 500) {
      setNewWidth(newWidth);
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
  }, [isDragging, sidebarWidth]);

  return (
    <div className='flex h-full w-full select-none bg-white'>
      <div
        className={`relative h-full overflow-x-hidden bg-gray-300 transition-all duration-300 ${
          isDragging
            ? 'border-r-2 border-blue-400'
            : 'border-r border-[#252525]'
        }`}
        ref={sidebarRef}
        style={{ width: `${sidebarWidth}px` }}
      >
        <div
          className='absolute right-0 top-0 h-full w-0.5 cursor-col-resize bg-green-500'
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
      </div>
    </div>
  );
};

export default ResizableSidebar;
