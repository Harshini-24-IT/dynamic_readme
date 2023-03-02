

import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
    
    <body className = "h-screen bg-gradient-to-r from-cyan-200 to-lime-200 ">
   <div style={{paddingTop: "1rem"}}>
 <table class="mt-4 table-auto border-separate border-spacing-2 ml-6 border border-black ...">
  <thead class="mb-5">
    <tr >
    <th class="border border-black ... p-4">Id</th>
      <th class="border border-black ... p-4">Name</th>
      <th class="border border-black ... p-4">Phone</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
    <tr key={user.id}>
    <td class="border border-black ... p-4"> {user.id} </td>
    <td class="border border-black ... p-4">  {user.name}</td>
    <td class="border border-black ... p-4">  {user.phone}</td>

  </tr>
    ))}  
  </tbody> 
</table> 
</div>
    </body>
 
    </>
  )

 /* return (
    <div>
      {users.map(user => (
        <li key = {user.id}>{user.email}</li>
      ))}
    </div>
  ) */
}

export default UsingFetch





  

