import { Link, useNavigate, useParams } from "react-router-dom";
import "../UserDetails/UserDetails.css";


const UserDetails = ({ users }) => {
  const navigate = useNavigate()
  const { id } = useParams();

  const user = users.find(
    (u) => u.id.toString() === id
  );

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <>
      <div style={{display:"flex",justifyContent:"end", marginRight:"20px",marginTop:"30px"}}>
        <button onClick={()=>navigate("/")} style={{fontSize:"18px",backgroundColor:"#2563eb",
           color:"whitesmoke",border:"none",padding:"5px",borderRadius:"8px"}}>Home</button>
      </div>
    <div className="user-details-container">
      <div className="details-header">
      <h2>USER DETAILS</h2>
      </div>
      <div className="details-blog">
      <div className="a1">
        <h2>{user.name}</h2>
        {/* <p>Username: {user.username}</p> */}
        <p>Email: {user.email}</p>
      </div>

      <div className="a2">
        <h4>Address</h4>
        <p>
          {user.address.street}, {user.address.suite},{" "}
          {user.address.city} - {user.address.zipcode}
        </p>
      </div>
      <div className="a3">
         <h4>Contact</h4>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
       </div>
      </div>
      </div>
    </>
  );
};

export default UserDetails;
