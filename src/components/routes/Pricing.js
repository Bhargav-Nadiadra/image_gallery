import React from 'react';
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h2>Pricing Plans</h2>
      <div className="pricing-plans">
        <div className="plan">
          <h3>Basic</h3>
          <div className="price">$9.99/month</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Select Plan</button>
        </div>
        <div className="plan">
          <h3>Standard</h3>
          <div className="price">$19.99/month</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button>Select Plan</button>
        </div>
        <div className="plan">
          <h3>Premium</h3>
          <div className="price">$29.99/month</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button>Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;