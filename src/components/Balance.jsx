import logo from "../images/logo.svg";
import "./balance.css";

const Balance = () => {
  return (
    <div className="balance-box">
      <div className="balance-total">
        <p>My balance</p>
        <h1>$921.48</h1>
      </div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Balance;
