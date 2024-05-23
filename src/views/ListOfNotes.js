import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  
  const handleRowClick = () => {
    navigate('/admin/Evaluation');
  };
  
  const handleNavigate = () => {
    navigate('/admin/Note-register');
  };

  return (
    <div className="content">
      <div className="register-page">
        <div className="header">
          <div className="card">
            <div className="card-header">
              <h4 className="title">Select Date Range</h4>
            </div>
            <div className="card-body">
              <div className="date-range">
                <div className="form-group">
                  <label htmlFor="fromDate">From Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fromDate"
                    value={fromDate}
                    onChange={handleFromDateChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="toDate">To Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="toDate"
                    value={toDate}
                    onChange={handleToDateChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <select
                    id="status"
                    className="form-control"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <button className="btn btn-info mt-4" onClick={handleSearch}>
                  Search
                </button>
                <button className="btn btn-info mt-4" onClick={handleNavigate}>
                  Add Entry
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="table-container mt-4">
          <table className="table table-striped">
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
                <td>
                  <a className="link-primary" href="#" onClick={handleRowClick}>
                    M47483
                  </a>
                </td>
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
    </div>
  );
};

export default RegisterPage;
