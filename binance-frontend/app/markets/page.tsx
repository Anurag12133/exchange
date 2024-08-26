import React from "react";
import "../css/LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="refer-section">
        <div className="refer-content">
          <h2>Refer and Earn</h2>
          <p>Refer a friend and earn a percentage of their trading fees.</p>
          <button className="refer-button">Manage Referrals</button>
        </div>
        <div className="refer-image">
          <img src="/path/to/image.png" alt="Refer and Earn" />
        </div>
      </div>

      <div className="markets-section">
        <div className="markets-header">
          <h2>Markets</h2>
        </div>

        <div className="markets-grid">
          <div className="market-category">
            <h3>New</h3>
            <ul>
              <li>
                MAX/USDC <span>$0.3368</span>{" "}
                <span className="negative">-0.68%</span>
              </li>
              <li>
                CLOUD/USDC <span>$0.1834</span>{" "}
                <span className="negative">-3.37%</span>
              </li>
              <li>
                AAVE/USDC <span>$132.38</span>{" "}
                <span className="negative">-3.29%</span>
              </li>
              <li>
                LDO/USDC <span>$1.2261</span>{" "}
                <span className="positive">+1.51%</span>
              </li>
              <li>
                MOTHER/USDC <span>$0.042</span>{" "}
                <span className="negative">-9.29%</span>
              </li>
            </ul>
          </div>

          <div className="market-category">
            <h3>Top Gainers</h3>
            <ul>
              <li>
                HNT/USDC <span>$6.583</span>{" "}
                <span className="positive">+5.90%</span>
              </li>
              <li>
                LINK/USDC <span>$12.35</span>{" "}
                <span className="positive">+2.15%</span>
              </li>
              <li>
                LDO/USDC <span>$1.2261</span>{" "}
                <span className="positive">+1.51%</span>
              </li>
              <li>
                DRIFT/USDC <span>$0.4689</span>{" "}
                <span className="positive">+1.17%</span>
              </li>
              <li>
                HONEY/USDC <span>$0.0738</span>{" "}
                <span className="neutral">0.00%</span>
              </li>
            </ul>
          </div>

          <div className="market-category">
            <h3>Popular</h3>
            <ul>
              <li>
                SOL/USDC <span>$157.75</span>{" "}
                <span className="negative">-0.80%</span>
              </li>
              <li>
                BTC/USDC <span>$63,303.40</span>{" "}
                <span className="negative">-1.26%</span>
              </li>
              <li>
                JUP/USDC <span>$0.8845</span>{" "}
                <span className="negative">-0.41%</span>
              </li>
              <li>
                IO/USDC <span>$2.1114</span>{" "}
                <span className="negative">-8.53%</span>
              </li>
              <li>
                ETH/USDC <span>$2,681.28</span>{" "}
                <span className="negative">-3.22%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
