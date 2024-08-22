import { useState } from "react";
import "../signUp/signUp.css";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/authService";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await authService.signup({
      username: formData.username,
      password: formData.password,
    });
    navigate("/signin");
  }

  return (
    <div className="inner-body">
      <div className="container-SignUp">
        <h1>SignUp</h1>
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

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input className="input-pas"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={handleFormData}
              value={formData.confirmPassword}
            />
          </div>

          <button className="button-Sign-Up" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}