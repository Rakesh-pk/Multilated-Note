import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerPage.css"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("");

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here
  };
  const handleRowClick = () =>{
    navigate('/admin/Evaluation')
  }
  return (
    <div className="content">
      
    <div className="register-page">
      <div className="header ">
        <CardHeader>
                <h4 className="title">Select Date Range</h4>
              </CardHeader>
        <div className="date-range">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={handleToDateChange}
          />
       
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        </div>
        <hr />
      </div>
      <div className="horizontal">
   
      </div>
      <div className="table-container">
      <table className="data-table table" style={{ fontSize: '0.9rem' }}>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Incident Rised</th>
            <th>Initiated By</th>
            <th>Initiated By Employee ID</th>
            <th>Initiated On</th>
            <th>Raised To</th>
            <th>Role</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a class="link-underline-primary" href="#" onClick={handleRowClick}>M47483</a></td>
            <td>Mutilated Note Exchange Request</td>
            <td>Manas Sen</td>
            <td>kmbl187007</td>
            <td>04-April-2024 11:30 AM</td>
            <td>Haresh H</td>
            <td>BOM</td>
            <td>Approval Pending</td>
            <td>Exchange Request</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    {/* </Card>
          </Col>
        </Row> */}
      </div>
  );
};

export default RegisterPage;
