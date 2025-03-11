import React, { children } from 'react'

export default function Layout({children}) {
  return (
    <div className='grid grid-cols-12 w-full'>
      {/* side bar */}
      <div className='col-span-3'>
       <ul> <li>User List</li></ul>
      </div>
      {/* main bar */}
      <div className='col-span-9'>
            {children}
      </div>
    </div>
  )
}
