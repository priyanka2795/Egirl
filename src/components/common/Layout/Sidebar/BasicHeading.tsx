import React, { FC, ReactNode } from 'react';

interface BasicHeadingProps {
  name: string;
}

const BasicHeading: FC<BasicHeadingProps> = ({ name }) => {
  return <h4 className='py-2 pl-4 uppercase text-main-gray-text'>{name}</h4>;
};

export default BasicHeading;
