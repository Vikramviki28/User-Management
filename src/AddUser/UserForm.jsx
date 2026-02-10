import { useState } from "react";
import '../AddUser/UserForm.css'
import { useNavigate } from "react-router-dom";

const UserForm = ({ addUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    city: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const newUser = {
      id: Date.now(), 
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      address: {
        street: formData.street,
        city: formData.city,
        zipcode: formData.zipcode,
      },
    };
    //  console.log("NEW USER:", newUser);
    addUser(newUser);
    navigate(`/users/${newUser.id}`);

   
  };

  return (
    <div className="main">
    <form onSubmit={handleSubmit} className="form-container">

        <div className="form-header">
           USER  REGISTRATION  FORM
        </div>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
      />

      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="zipcode"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={handleChange}
      />

      <button type="submit" className="btn">Add User</button>
      
    </form>
    </div>
  );
};

export default UserForm;
