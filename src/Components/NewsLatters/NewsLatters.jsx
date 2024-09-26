import React from "react";
import './NewsLatters.css'

const NewsLatters = () => {
  return (
    <div className="newslatters">
      <h1>get exclusive Offerce on your email</h1>
      <p>subscribe to our NewsLatters and stay updated </p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLatters;
