const UsersList = ({ users }) => (
    <div>
      {users && users.map((u, i) => (
        <div key={i}>
          <h2>{u.name}</h2>
        </div>
      ))}
    </div>
  )
  
  export default UsersList;