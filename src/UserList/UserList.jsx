import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <h3>No users found</h3>;
  }

  return (
    <div className="user-list-container">
  <h2>USER LIST</h2>

  <Link to="/add-user" className="add-user-link">
    Add New User
  </Link>

  <ul className="user-list">
    {users.map((user) => (
      <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.username}</Link>
      </li>
    ))}
  </ul>
</div>

  );
};

export default UserList;
