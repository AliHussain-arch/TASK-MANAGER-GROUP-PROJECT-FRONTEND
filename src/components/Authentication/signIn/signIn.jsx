import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../signIn/signIn.css';
import authService from "../../../services/authService";
export default function SignIn({setUser}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    await authService.signin(formData);
    const user = await authService.getUser();
    setUser(user); 
    console.log(user);
    navigate(`/${user.id}/projects`);
  }
  return (
    <div className="inner-body">
    <div className="container">
      <h1>SignIn</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input className="input-name"
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={handleFormData}
            value={formData.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="input-pas"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={handleFormData}
            value={formData.password}
          />
        </div>
        <button className="button-sign-in" type="submit">Sign In</button>
      </form>
    </div>
    </div>
  );
}
