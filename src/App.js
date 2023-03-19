import React, {
  useState
} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

// Fictional Data
const App = () => {
  const usersData = [{
      id: 1,
      name: 'Tania',
      username: 'floppydiskette'
    },
    {
      id: 2,
      name: 'Craig',
      username: 'siliconeidolon'
    },
    {
      id: 3,
      name: 'Ben',
      username: 'benisphere'
    },
  ]

  const [users, setUsers] = useState(usersData)
  // Editing state logic for modal
  const [editing, setEditing] = useState(false)
  // Inicial form state Empty waiting the selected entry for colect it's data
  const initialFormState = {
    id: null,
    name: '',
    username: ''
  }
  // Way to see and updtate who the current user being edit is
  const [currentUser, setCurrentUser] = useState(initialFormState)

  // Because we're not using a API or a Database i've created this function to autoincremet the user id
  // But if we have one of those it probably wouldn't be necessary.
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // Delete arrow function to delete data :)
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  // Update arrow function to alter data of DB
  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  return ( 
    <div className = "container">
      <h1> CRUD App with Hooks </h1>  
      <div className = "flex-row">
        <div className = "flex-large">
          <h2> Add user </h2>
          <AddUserForm addUser = {addUser}/>
        </div >
        <div className = "flex-large">
          <h2> View users </h2> 
          {/* Passing the deleteUser and EditRow as Props to User Table */}
          <UserTable users = { users } editRow={editRow} deleteUser = {deleteUser} />
        </div>
      </div>
    </div>
)
}

export default App