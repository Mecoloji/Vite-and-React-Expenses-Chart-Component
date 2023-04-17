import data from "./data";
import "./spending.css";
const Spending = () => {
  const dataPrice = data.map((item) => item);

  // To dynamically dimension the bars in the chart, we can modify the data from data.jsx
  // height: `${dataPrice[].amount}%`
  return (
    <div className="spending-container">
      <div>
        <h2 className="days">Spending - Last 7 days</h2>
        <div className="weeks-chart">
          <div
            className="box-1 box"
            style={{ height: `${dataPrice[0].amount}%` }}
          >
            <div className="price">${dataPrice[0].amount}</div>
            <p>{dataPrice[0].day}</p>
          </div>
          <div
            className="box-2 box"
            style={{ height: `${dataPrice[1].amount}%` }}
          >
            <div className="price">${dataPrice[1].amount}</div>
            <p>{dataPrice[1].day}</p>
          </div>
          <div
            className="box-3 box"
            style={{ height: `${dataPrice[2].amount}%` }}
          >
            <div className="price">${dataPrice[2].amount}</div>
            <p>{dataPrice[2].day}</p>
          </div>
          <div
            className="box-4 box"
            style={{ height: `${dataPrice[3].amount}%` }}
          >
            <div className="price">${dataPrice[3].amount}</div>
            <p>{dataPrice[3].day}</p>
          </div>
          <div
            className="box-5 box"
            style={{ height: `${dataPrice[4].amount}%` }}
          >
            <div className="price">${dataPrice[4].amount}</div>
            <p>{dataPrice[4].day}</p>
          </div>
          <div
            className="box-6 box"
            style={{ height: `${dataPrice[5].amount}%` }}
          >
            <div className="price">${dataPrice[5].amount}</div>
            <p>{dataPrice[5].day}</p>
          </div>
          <div
            className="box-7 box"
            style={{ height: `${dataPrice[6].amount}%` }}
          >
            <div className="price">${dataPrice[6].amount}</div>
            <p>{dataPrice[6].day}</p>
          </div>
        </div>
        <hr />
        <div className="total-box">
          <h3>Total this month</h3>
          <div className="total-price">
            <h1>$478.33</h1>
            <div className="percentage">
              <h4>+2.4%</h4>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spending;
