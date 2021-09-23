import { useState } from "react";
import axios from "axios";
import "../Feedback/feedback.css";
import Footer from '../../components/Footer/footer';
import Header from '../../components/Navbar/Navbar';

const HelpView = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const HelpHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    
   const mail = "from: " + localStorage.getItem("email") + " subject: " + subject +" message: "+ message;

    try {
       await axios.post(
        "http://localhost:5000/api/email/help",
        { mail },
        config
      );
      alert("We will get back to you soon!");
      window.location.reload();
    } catch (error) {
      setError("please retry to send the email");
      setTimeout(() => {
        setError(error);
      }, 5000);
    }
   
  };

  return (
  <div>
      <Header />
      <form className="privateform">
        <h3 className="login-title">Do You Need Help?</h3>
        {error && <span className="error-message">{error}</span>}
        <div onSubmit={HelpHandler} className="form-group">
          <label htmlFor="subject">
            Subject:
          </label>
          <input
            type="text"
            required
            id="subject"
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            tabIndex={2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message:
          </label>
          <textarea
            type="textarea"
            required
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            tabIndex={2}
          />
        </div>
        <button id="sendFeedback" type="submit"  onClick={HelpHandler} className="submitButton">
          Send
        </button>
      </form>
      <Footer />
      </div>
    );
};

export default HelpView;
