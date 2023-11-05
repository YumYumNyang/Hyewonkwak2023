import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-xl min-h-screen m-auto items-center flex flex-col px-10 py-[100px] max-sm:px-2 max-sm:pt-20 max-sm:pb-[0px] box-border">
      {children}
    </div>
  )
}

export default layout
