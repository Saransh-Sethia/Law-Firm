import React from "react";
import "./Practices.css";
import Rectangle1 from '../../assets/Rectangle-1.png';
import Rectangle2 from '../../assets/Rectangle-2.png';
import Rectangle3 from '../../assets/Rectangle-3.png';
import Rectangle4 from '../../assets/Rectangle-4.png';
import Rectangle5 from '../../assets/Rectangle-5.png';
import Rectangle6 from '../../assets/Rectangle-6.png';

const Practices = () => {
  return (
    <div className="rectangle-images">
      <h1 className="heading-1">Area of Practices</h1>
      <div className="row-1">
        <img src={Rectangle1} alt='rectangle1' className="rectangle1" />
        <img src={Rectangle2} alt='rectangle2' className="rectangle2" />
      </div>
      <div className="row-2">
        <img src={Rectangle3} alt='rectangle1' className="rectangle1" />
        <img src={Rectangle4} alt='rectangle2' className="rectangle2" />
      </div>
      <div className="row-3">
        <img src={Rectangle5} alt='rectangle1' className="rectangle1" />
        <img src={Rectangle6} alt='rectangle2' className="rectangle2" />
      </div>
    </div>
  );
};

export default Practices;
