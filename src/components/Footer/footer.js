import React from 'react'
import './footer.css'

export default function FooterContainer() {
    return (
        <footer>
             <div className="wrapper">
                <div className="row">
                    <div className="column">
                        <h4>About Us</h4>
                        <a href="/about#aboutQuestion1">How it works</a>
                        <a href="/about">Partners</a>
                        <a href="/about">Testimonials</a>
                    </div>
                    <div className="column">
                        <h4>Help</h4>
                        <a href="/help">Help</a>
                        <a href="/help">Support</a>
                        <a href="/help">E-Mail</a>
                        <a href="/help">Phone</a>
                    </div>
                    <div className="column">
                        <h4>Feedback</h4>
                        <a href="/feedback">General</a>
                        <a href="/overview">Rate Product</a>
                        <a href="/overview">Recommendations</a>
                        <a href="/feedback">Feedback</a>
                    </div>
                    <div className="column">
                        <h4>Social</h4>
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" />Facebook</a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram" />Instagram</a>
                        <a href="https://www.youtube.com/"><i className="fab fa-youtube" />Youtube</a>
                        <a href="https://www.twitter.com/"><i className="fab fa-twitter" />Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}