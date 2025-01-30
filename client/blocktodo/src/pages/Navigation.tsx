import { Link } from "react-router-dom"
const Navigation = ()=>{
  return <div>
    <ul>
      <Link to="/">
        <li>Wallet</li>
      </Link>
      <Link to="/view-task">
        <li>View a task</li>
      </Link>

      <Link to="/create-task">
      <li>Create a task</li> 
      </Link>

      <Link to="/update-task">
      <li>Update a task</li> 
      </Link>

      <Link to="/delete-task">
      <li>Delete a task</li>
      </Link>
    </ul>

  </div>
}

export default Navigation
