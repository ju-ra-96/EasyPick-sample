import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Register/forms.css";
import Footer from '../../components/Footer/footer';
import Header from '../../components/Navbar/Navbar';

const LoginView = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/account/login',
        { email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("email", email);
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("lastName", data.lastName);
      history.push("/");
    } catch (error) {
      setError("please retry to login");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="form-page">
      <Header />
      <form onSubmit={loginHandler} className="form">
        <h3 className="login-title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}

          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <span className="message">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
        <Link to="/forgotpassword" className="forgotpassword">
              Forgot Password?
        </Link>
      </form>
      <Footer />
    </div>
  );
};

export default LoginView;
