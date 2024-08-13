import React from 'react';

interface IconProps {
  name: string; 
}

const iconPaths: Record<string, string> = {
  'caret-right': 'M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 000-3.088l-5.927-4.88z',
};

function Icon({ name }: IconProps) {
  const path = iconPaths[name];

  if (!path) {
    console.error(`Icon with name "${name}" not found.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true" // Fixed typo here: ariaHidden -> aria-hidden
      className="w-6 h-6 text-gray-800 dark:text-white"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d={path}
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
