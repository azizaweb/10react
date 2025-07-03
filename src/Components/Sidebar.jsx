import React from 'react'

const SideBar = () => {
  return (
  <aside className='bg-white w-60 p-5 border-r min-h-screen'>
    <h1 className='text-2xl font-bold mb-10 '>Dashboard</h1>
<nav className='flex flex-col gap-4 ' >
<a className='hover:text-indigo-500' href="#">Dashboard</a>
<a className='hover:text-indigo-500' href="#">Product</a>
<a className= 'text-white bg-indigo-600 rounded p-2 '>Customers</a>
<a className='hover:text-indigo-500' href="#">Income</a>
<a className='hover:text-indigo-500' href="#">Promote</a>
<a className='hover:text-indigo-500' href="#">Help</a>
</nav>
  </aside>
  )
}

export default SideBar