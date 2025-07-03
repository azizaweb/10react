import React from 'react'
import StatusBadge from './StatusBadge';
const CustomerTable = () => {
    const members = [
    {
      customer_name: "Jane Cooper",
      Company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      customer_name: "Floyd Miles",
      Company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      Email: "floyd@yahoo.com",
      Country: "Kiribati",
      Status: "Inactive",
    },
    {
      customer_name: "Ronald Richards",
      Company: "Adobe",
      phoneNumber: "(302) 555-0107",
      Email: "ronald@adobe.com",
      Country: "Israel",
      Status: "Inactive",
    },
    {
      customer_name: "Marvin McKinney",
      Company: "Tesla",
      phoneNumber: "(252) 555-0126",
      Email: "marvin@tesla.com",
      Country: "Iran",
      Status: "Active",
    },
    {
      customer_name: "Jerome Bell",
      Company: "Google",
      phoneNumber: "(629) 555-0129",
      Email: "jerome@google.com",
      Country: "Réunion",
      Status: "Active",
    },
    {
      customer_name: "Kathryn Murphy",
      Company: "Microsoft",
      phoneNumber: "(406) 555-0120",
      Email: "kathryn@microsoft.com",
      Country: "Curaçao",
      Status: "Active",
    },
    {
      customer_name: "Jacob Jones",
      Company: "Yahoo",
      phoneNumber: "(208) 555-0112",
      Email: "jacob@yahoo.com",
      Country: "Brazil",
      Status: "Active",
    },
    {
      customer_name: "Kristin Watson",
      Company: "Facebook",
      phoneNumber: "(704) 555-0127",
      Email: "kristin@facebook.com",
      Country: "Åland Islands",
      Status: "Inactive",
    }
  ];
  return (
    <div className='p-8 bg-white rounded shadow-md flex-1 '>
        <StatusBadge />
      <h2 className='text-xl font-semibold mb-4'>All Customers </h2>
      <table className='w-full text-left'>
<thead>
    <tr className='text-gray-500 text-sm border-b'>
        <th className='py-2 '>Customer Name</th>
        <th>Company</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Country</th>
        <th>Status</th>
    </tr>
</thead>
<tbody>
    {members.map ((member,index) =>(
     <tr key={index} className='border-b hover:bg-gray-50 text-sm'>
        <td className='py-3 '>{member.customer_name} </td>
        <td>{member.Company}</td>
       <td>{member.phoneNumber}</td>
       <td>{member.Email}</td>
       <td>{member.Country}</td>
       <td>{member.Status}</td>
       <td><StatusBadge status={member.Status} /></td>
     </tr>   
    )
    
    )}
</tbody>
      </table>
    </div>
  )
}

export default CustomerTable