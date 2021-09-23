/* eslint-disable no-useless-escape */
import { useState } from "react";
import axios from "axios";
import "./MyAccount.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Navbar/Navbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const MyAccountView = () => {
  const [error, setError] = useState("");
  const deleteAccount = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      data: {
        email: localStorage.getItem("email"),
      },
    };

    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("email");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      window.location.reload();
      await axios.delete("http://localhost:5000/api/account/myaccount", config);
    } catch (error) {
      setError("please retry to delete your account");
      setTimeout(() => {
        setError(error);
      }, 5000);
    }
  };

  const UpdateFistName = async (e) => {
    e.preventDefault();
    var firstname = prompt("Please Enter your firstname");
    try {
      localStorage.setItem("firstName", firstname);
      window.location.reload();
      const config = {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      await axios.put(
        "http://localhost:5000/api/account/updatefirstname",
        {
          email: localStorage.getItem("email"),
          firstname,
        },
        config
      );
    } catch (error) {
      setError("please retry to change your first name");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const UpdateLastName = async (e) => {
    e.preventDefault();
    var lastname = prompt("Please Enter your lastname");
    try {
      localStorage.setItem("lastName", lastname);
      window.location.reload();
      const config = {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      await axios.put(
        "http://localhost:5000/api/account/updatelastname",
        {
          email: localStorage.getItem("email"),
          lastname,
        },
        config
      );
    } catch (error) {
      setError("please retry to change your last name");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const UpdateEmail = async (e) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = prompt("Please Enter your email");
    if (regex.test(email)) {
      try {
        const config = {
          header: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
        await axios.put(
          "http://localhost:5000/api/account/updateemail",
          {
            email: localStorage.getItem("email"),
            newmail: email,
          },
          config
        );
        localStorage.setItem("email", email);
        window.location.reload();
      } catch (error) {
        setError("please retry to change your email");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="myaccount-page">
      <Header />
      <div className="myaccount-subpage">
        <h3>MyAccount</h3>
        {error && <span className="error-message">{error}</span>}
        <form className="entry" onSubmit={UpdateFistName} id="FirstNameEntry">
          <p className="key">First Name:</p>
          <p className="value">{localStorage.getItem("firstName")}</p>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
        <form className="entry" onSubmit={UpdateLastName} id="LastNameEntry">
          <p className="key">Last Name:</p>
          <p className="value">{localStorage.getItem("lastName")}</p>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={UpdateLastName}
          >
            Update
          </button>
        </form>
        <form className="entry" onSubmit={UpdateEmail} id="EmailEntry">
          <p className="key">Email:</p>
          <p className="value">{localStorage.getItem("email")}</p>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
        <Grid container justify="center">
        <Button
          component={Link}
          to="/compare"
          variant="contained"
          color="secondary"
          size="small"
          className="compareButton"
        >
          See Past recommendations
        </Button>

        </Grid>


        <div className="entry">
          <p className="key">
            *to change your password, please logout, go to the login page, and
            click forgot password
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={deleteAccount}
        className="btn btn-primary delete-button"
      >
        Delete
      </button>
      <Footer />
    </div>
  );
};

export default MyAccountView;
