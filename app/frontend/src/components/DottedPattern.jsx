import React from 'react';

const DottedPattern = ({ className = '', opacity = 0.3 }) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dotted-pattern"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.5"
              className="fill-teal-500 dark:fill-teal-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
      </svg>
    </div>
  );
};

export default DottedPattern;
