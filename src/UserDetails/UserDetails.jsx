import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../UserDetails/UserDetails.css"
const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <h4>Loading, please wait...</h4>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div className="a1">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      </div>

      <div className="a2">
      <h4>Address</h4>
      <p>
        {user.address.street}, {user.address.suite},{" "}
        {user.address.city} - {user.address.zipcode}
      </p>
      </div>

      <h4>Contact</h4>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </>
  );
};

export default UserDetails;
