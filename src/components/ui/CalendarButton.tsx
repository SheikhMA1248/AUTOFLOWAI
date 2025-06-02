import React, { ReactNode } from 'react';
import { Calendar } from 'lucide-react';

interface CalendarButtonProps {
  text: string;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const CalendarButton: React.FC<CalendarButtonProps> = ({ 
  text, 
  className = "",
  iconLeft = <Calendar size={18} className="mr-2" />,
  iconRight
}) => {
  const handleClick = () => {
    const element = document.getElementById('book-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`flex items-center justify-center ${className}`}
    >
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
};