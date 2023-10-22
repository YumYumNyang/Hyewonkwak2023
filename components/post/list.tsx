import React from 'react';

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,240px))] justify-center max-w-screen-lg w-full my-20 gap-2 sm:gap-4">
      {children}
    </div>
  );
};

export default List;
