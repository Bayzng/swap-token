import Circle from "../Circle";
import "./Home.css";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const community = [
    { icon: <FaDiscord />, url: "https://discord.com" },
    { icon: <FaTwitter />, url: "https://twitter.com/dltAfrica" },
    { icon: <FaGithub />, url: "https://github.com/info@dltafrica.io" },
  ];

  // Using the map method to generate JSX for each item in the community array
  const communityLinks = community.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="iconLink"
    >
      {item.icon}
    </a>
  ));

  return (
    <>
      <div className="context">
        <div className="heroBox">
          <div className="heroText">
            <h1>
              {" "}
              SWAP COIN
              <span> PROTOCOL</span>
            </h1>
            <p>
              Swap, Earn and Build on the leading decentralized crypto trading
              protocol.
            </p>
          </div>
          <div className="iconBox">{communityLinks}</div>

          <div className="dltDetails">
            <div className="dltCoin">
              <span>
                $
                1B
                +
              </span>
              <p>Trade Volume</p>
            </div>
            <div className="usdtCoin">
              <span>$1B+</span>
              <p>All Trade</p>
            </div>
            <div className="udcCoin">
              <span>5+</span>
              <p>Community delegate</p>
            </div>
          </div>
        </div>
      </div>

      <Circle/>
    </>
  );
};

export default Home;
