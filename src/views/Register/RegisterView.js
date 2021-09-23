import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./forms.css";
import Footer from '../../components/Footer/footer';
import Header from '../../components/Navbar/Navbar';

const RegisterView = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/account/register",
        {
          firstName,
          lastName,
          email,
          password,
        },
        config
      );
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("email", email);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      history.push("/");
    } catch (error) {
      setError("please retry to register");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="form-page">
      <Header />
      <form onSubmit={registerHandler} className="form">
        <h3 className="register-title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            required
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            required
            id="lastName"
            placeholder="Enter a lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="message">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <Footer />
    </div>
  );
};

export default RegisterView;
