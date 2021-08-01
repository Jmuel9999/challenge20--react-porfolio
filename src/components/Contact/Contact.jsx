import "./contact.scss";
import React, { useState } from "react";

export default function Contact() {
    return (
        <div className="contactDiv">
            <div className="contactContainer">
                
                <form className="contactForm">
                    <h1>Reach out to me!</h1>
                    <div className="inputField">
                        <label className="inputName" for="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter your name here."></input>
                    </div>
                    <div className="inputField">
                        <label className="inputName" for="name">Email:</label>
                        <input type="text" id="name" placeholder="Enter your email here."></input>
                    </div>
                    <div className="inputField">
                        <label className="inputName" for="name">Message:</label>
                        <textarea type="text" id="name" placeholder="Questions?"></textarea>
                    </div>
                    <button className="contactSubmitBtn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
