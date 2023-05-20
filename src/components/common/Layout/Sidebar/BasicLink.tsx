import React, { FC, ReactNode } from 'react';

interface BasicLinkProps {
  href: string;
  name: string;
  component: ReactNode;
}

const BasicLink: FC<BasicLinkProps> = ({ href, name, component }) => {
  return (
    <a href={href} className='flex items-center py-2 pl-4 hover:bg-main-gray'>
      <div className='mr-2 '>{component}</div>
      <span>{name}</span>
    </a>
  );
};

export default BasicLink;
