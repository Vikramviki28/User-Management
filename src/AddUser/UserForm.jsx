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
      username: formData.name.toLowerCase().replace(/\s+/g, ""),
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
    navigate("/");

   
  };

  return (
    <div className="main">
    <form onSubmit={handleSubmit} className="form-container">

        <div className="form-header">
           USER-REGISTRATION  FORM
        </div>

      <input className="inp"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange} required
      />

      <input className="inp"
        type="text"
        name="name"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange} required
      />

      <input className="inp"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange} required
      />

      <input className="inp"
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange} required
      />

      <input className="inp"
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange} required
      />

      <input className="inp"
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange} required
      />

      <input className="inp"
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange} required
      />

      <input className="inp"
        type="text"
        name="zipcode"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn">Add User</button>
      
    </form>
    </div>
  );
};

export default UserForm;
