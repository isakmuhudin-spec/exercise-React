import UserList from './UserList'

function App() {
  

const users = [
  {id: 1, name: "isak", email:'isakmuhudin@gmail.com' },
  {id:2, name:"Cade", email:'Attacktorr@gmail.com'}
]

  return (
    <>
      <UserList users= {users}/>
    </>
  )
}

export default App
