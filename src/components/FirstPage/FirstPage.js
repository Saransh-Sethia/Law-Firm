import React from "react";
import "./FirstPage.css";
import Man from "../../assets/Man.png";
import Rectangle from "../../assets/Rectangle.png";

const FirstPage = () => {
  return (
    <div className="first-page">
        <div className="column-1">
      <h1 className="line-1">You don’t have to</h1>
      <h1 className="line-2">Fight them Alone.</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
        hac massa gravida arcu interdum proin curae.
      </p>
      <p className="chat">Enter your Email Address <span className="toggle">Let's Talk</span></p>
      </div>
      <div className="column-2">
      <img src={Rectangle} alt="rectangle" className="image-rectangle"/>
      <img src={Man} alt="man" className="image-man"/>
      </div>
    </div>
  );
};

export default FirstPage;
