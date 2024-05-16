import React, { useState } from "react";
import "./makerRole.css";
import { useNavigate } from "react-router-dom";

const MakerRole = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const [amounts, setAmounts] = useState({
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0
  });

  const handleInputChange = (value, denomination) => {
    const updatedAmounts = { ...amounts, [denomination]: value };
    setAmounts(updatedAmounts);

    let total = 0;
    Object.keys(updatedAmounts).forEach((denom) => {
      total += updatedAmounts[denom] * parseInt(denom);
    });
    setTotalAmount(total);
  };

  const handleSaveTally = () => {
    // let total = 0;
    // const inputFields = document.querySelectorAll(".table-input");
    // inputFields.forEach((input) => {
    //   total += parseInt(input.value || 0);
    // });
    // setTotalAmount(total);
    navigate("/tally");
  };

  return (
    <div className="role-component container" ref={ref}>
      <div className="token-no">
        <p>Token no(Sr. on DN1):</p>
        <input type="text" placeholder="Enter token no" readOnly />
      </div>
      <div className="customer-details">
        <h3>Customer Details</h3>
        <div className="customer-type">
          <p>Customer Type:</p>
          <label>
            <input type="radio" name="customerType" value="kotak" />
            Kotak Bank Account Holder
          </label>
          <label>
            <input type="radio" name="customerType" value="walkin" />
            Walk-in Customer
          </label>
        </div>
        <br />
        <div className="input-container">
          <div>
            <label>CRN:</label>
            <br/>
            <input type="text" placeholder="Enter CRN" />
          </div>
          <div>
            <label>Account Number:</label>
            <input type="text" placeholder="Enter account number" />
          </div>
          <div>
            <label>Customer Name:</label>
            <input type="text" placeholder="Enter customer name" />
          </div>
          <div>
            <label>Contact Number:</label>
            <input type="text" placeholder="Enter contact number" />
          </div>
          <div>
            <label>Customer Address:</label>
            <input type="text" placeholder="Enter customer address" />
          </div>
         
        </div>
        <br />
      </div>
      <div className="amount-receipt-table">
        <h3>Amount Receipt from Customer</h3>
        <table>
          <thead >
            <tr>
              <th colSpan="1" className="th-background-colour"></th>
              <th colSpan="9" className="th-background-colour">Notes</th>
              <th colSpan="2" className="th-background-colour" rowSpan="2">
                Total Amount
              </th>
            </tr>
            <tr>
              <th className="th-background-colour">Denomination</th>
              <th className="th-background-colour">500</th>
              <th className="th-background-colour">200</th>
              <th className="th-background-colour">100</th>
              <th className="th-background-colour">50</th>
              <th className="th-background-colour">20</th>
              <th className="th-background-colour">10</th>
              <th className="th-background-colour">5</th>
              <th className="th-background-colour">2</th>
              <th className="th-background-colour">1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="input-table-row">
              <td>Count</td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 500)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 200)}
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 100)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 50)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 20)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 10)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 5)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 2)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input"
                  onChange={(e) => handleInputChange(e.target.value, 1)}
                />
              </td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <button className="save-tally" onClick={handleSaveTally}>
          Save for final tally
        </button>
       
      </div>
    </div>
  );
})

export default MakerRole;
