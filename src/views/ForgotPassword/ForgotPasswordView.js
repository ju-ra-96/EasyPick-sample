import { useState } from "react";
import axios from "axios";
import "../Register/forms.css";
import Footer from '../../components/Footer/footer';
import Header from '../../components/Navbar/Navbar';

const ForgotPasswordView = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/account/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="forgotpassword-page">
      <Header />
      <form
        onSubmit={forgotPasswordHandler}
        className="form"
      >
        <h3 className="forgotpassword-title">Forgot Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <p className="message">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
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
        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ForgotPasswordView;
