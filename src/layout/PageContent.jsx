import React from 'react';

const PageContent = ({ children }) => {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      {children}
    </div>
  );
};

export default PageContent;