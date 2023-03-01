

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
  
  /*return (
    <>
    
    <body className = "h-screen bg-gradient-to-r from-rose-300 to-stone-300 ">
 
   
    <table class="table-auto border-separate border-spacing-2 ml-6 border border-black ...">
  <thead class="mb-5">
    <tr >
    <th class="border border-black ...">Build Name</th>
      <th class="border border-black ...">Current Run time </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-black ..."> Java service Editor </td>
      <td class="border border-black ..."> 11.11 ms </td>
    </tr>
    <tr>
      <td class="border border-black ..."> MSR based cloud default execution </td>
      <td class="border border-black ..."> 10.10 ms </td>
    </tr>
    <tr>
      <td class="border border-black ..."> Cloud IS </td>
      <td class="border border-black ..."> 12.12 ms </td>
    </tr>
    
  </tbody>
</table>

    </body>
 
    </>
  )*/

  return (
    <div>
      {users.map(user => (
        <li key = {user.id}>{user.email}</li>
      ))}
    </div>
  )
}

export default UsingFetch





  

