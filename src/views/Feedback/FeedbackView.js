import { useState } from "react";
import axios from "axios";
import "./feedback.css";
import Footer from '../../components/Footer/footer';
import Header from '../../components/Navbar/Navbar';

const FeedbackView = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");


  const feedbackHandler = async (e) => {
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
        "http://localhost:5000/api/email/feedback",
        { mail },
        config
      );
    alert("Thank you for your feedback!");
    window.location.reload();
    } catch (error) {
      setError("please retry to send the email");
      setTimeout(() => {
        setError(error);
      }, 5000);
    }
   
  };

  return(
  <div>
      <Header />
      <form className="privateform">
        <h3 className="login-title">Send Us Feedback</h3>
        {error && <span className="error-message">{error}</span>}
        <div onSubmit={feedbackHandler} className="form-group">
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
        <button id="sendFeedback" type="submit"  onClick={feedbackHandler} className="submitButton">
          Send
        </button>
      </form>
      <Footer />
      </div>
    );
};

export default FeedbackView;
