import React, { useState } from "react";
import "./makerRole.css";

const MakerRole2 = ({makerRoleRef}) => {
  const [totalValue, setTotalValue] = useState(0);
  const [fullValue,setFullValue]= useState(0)
  const [fullAmount, setFullAmount] = useState({
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
  const scrollToMakeRole =()=>{
    makerRoleRef.current.scrollIntoView({behaiour:"smooth"})
  }
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
    setTotalValue(total/2);
  };

  const handlInputFullValue =(value, denomination)=>{
    const updatedAmounts = { ...amounts, [denomination]: value };
    setFullAmount(updatedAmounts);

    let total = 0;
    Object.keys(updatedAmounts).forEach((denom) => {
      total += updatedAmounts[denom] * parseInt(denom);
    });
    setFullValue(total);
  }
  
  return (
    <div className="amount-receipt-table  content">
      <h3>Amount Receipt from Customer</h3>
      <table>
      <thead>
        <tr className="overTableHead">
          <th colSpan="1">Denomination</th>
          <th colSpan="9">Notes</th>
          <th colSpan="1" rowSpan="2">
            Total Number of pieces
          </th>
          <th colSpan="1" rowSpan="2">
            Total Value
          </th>
        </tr>
        <tr className="overTableHead">
          <th></th>
          <th>500</th>
          <th>200</th>
          <th>100</th>
          <th>50</th>
          <th>20</th>
          <th>10</th>
          <th>5</th>
          <th>2</th>
          <th>1</th>
        </tr>
      </thead>
      <tbody>
        <tr className="input-table-row">
          <td>full value</td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 500)}/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 200)} disabled/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 100)} disabled/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 50)} disabled/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 20)} disabled/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 10)} disabled/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 5)} disabled/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 2)} disabled/>
          </td>
          <td>
            <input type="number" className="table-input"  onChange={(e) => handlInputFullValue(e.target.value, 1)} disabled/>
          </td>
          <td>{/* Total number of pieces */}</td>
          <td>{fullValue}</td>
        </tr>
        <tr className="input-table-row">
          <td>half value</td>
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
          <td>{/* Total number of pieces */}</td>
          <td>{totalValue}</td>
        </tr>
        <tr className="input-table-row">
          <td>Rejcted</td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td><input type="number"  className="table-input"/></td>
         <td></td>
         <td></td>
      
        </tr>
        <tr>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td>
           Total 
          </td>
          <td>
            
            {totalValue+ fullValue}
          </td>
        </tr>
      </tbody>
    </table>
      <div className="second-container">
        <div className="first-child">
          <div className="customer-type">
            <p>Payment Done via:</p>
            <label>
              <input type="radio" name="customerType" value="kotak" />
              Cash
            </label>
            <label>
              <input type="radio" name="customerType" value="walkin" />
              Customer Account
            </label>
          </div>
          <div className="note">
            Note: Differential amount ( Receipt - Payment ) of Rs 1000 is
            credited in the GL
          </div>
        </div>
        <br />
        <table>
          <tr>
            <td style={{ border: "none" }}>Customer Name</td>
            <td style={{ border: "none" }}><input type="text" placeholder="Customer Name"/></td>
          </tr>
          <tr>
          <td style={{ border: "none" }}>Operational/Unusual Event Id</td>
            <td style={{ border: "none" }}><input type="text" placeholder="Operational"/></td>
          </tr>
          <tr>
          <td style={{ border: "none" }}>Remarks</td>
            <td style={{ border: "none" }}><input type="text" placeholder="Remarks"/></td>
          </tr>
          
        </table>
        <hr />

        <div>
        <p>Approving Authority</p>
        <div className="label-inputs">
      
        <label >Employee Id</label>
        <label >Employee Name</label>
        <label >HRMS Role</label>
        </div>
        <br />
       <div className="label-inputs">
       <input type="text" placeholder="EMPLOYEE ID" />
        <input type="text" placeholder="EMPLOYE NAME"/>
        <input type="text"  placeholder="HRMS ROLE"/>
       
       </div>
      <div className="parent-div-btn w-100">
      <button className="input-submit-button">Submit</button>
      </div>
      
        </div>
      </div>
     
    </div>
  );
};

export default MakerRole2;
