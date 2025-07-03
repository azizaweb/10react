import React from 'react'
import CustomerTable from './Components/CustomerTable'
import SideBar from './Components/SideBar';

const App = () => {
  return (
    <div className='flex bg-gray-100'>
      <SideBar />
      <main className='flex-1 p-8'>
 <h1 className='text-2xl font-bold mb-6'>Hello Evano 👋🏼</h1>
 <CustomerTable />
      </main>

    </div>
  )
}

export default App