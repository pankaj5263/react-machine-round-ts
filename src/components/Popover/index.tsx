import React, { useEffect, useRef } from 'react';
import PopoverMain from './PopoverMain';

interface PopoverProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Popover: React.FC<PopoverProps> = ({ title, children, isOpen, onClose }) => {
console.log(isOpen);
  const popoverRef = useRef<HTMLElement>();

  useEffect(() => {
    if (!isOpen) return;
  
    let ignoreClick = true;
  
    const handleClick = (e: MouseEvent) => {
      if (ignoreClick) {
        ignoreClick = false;
        return;
      }
  
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
  
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div ref={popoverRef}>
          <PopoverMain title={title} content={children} onClose={onClose} />
        </div>
      )}
    </>
  );
};

export default Popover;
