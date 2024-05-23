import React, { useRef, useEffect , useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import './makerRole.css'

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Dropdown,
  Container,
  Form,
  PaginationItem,
  PaginationLink,
  Pagination,
} from "reactstrap";

import RegisterPage from "./ListOfNotes";
import BreadCrumbs from "./BreadCrumbs";

const requests = [
    {
      RequestID: 'M84576',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18173',
      InitialtedBy: 'Mans Sen',
      initiatedOn: '04-Apr-24 11:30AM',
      RaisedTo: 'Haresh H',
      Role: 'BOM',
      Status: 'Pending Approval',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84577',
      IncidentRaised: 'Counterfeit Note Report',
      InitialtedByemployeeId: 'KLBLM18174',
      InitialtedBy: 'John Doe',
      initiatedOn: '05-Apr-24 09:15AM',
      RaisedTo: 'Rita S',
      Role: 'Manager',
      Status: 'Pending Approval',
      Remarks: 'Counterfeit Report'
    },
    {
      RequestID: 'M84578',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18175',
      InitialtedBy: 'Alice Smith',
      initiatedOn: '06-Apr-24 10:30AM',
      RaisedTo: 'Tom B',
      Role: 'BOM',
      Status: 'Approved',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84579',
      IncidentRaised: 'Suspected Counterfeit Note',
      InitialtedByemployeeId: 'KLBLM18176',
      InitialtedBy: 'Bob Brown',
      initiatedOn: '07-Apr-24 02:45PM',
      RaisedTo: 'Jane K',
      Role: 'Supervisor',
      Status: 'Rejected',
      Remarks: 'Suspected Counterfeit'
    },
    {
      RequestID: 'M84580',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18177',
      InitialtedBy: 'Chris Lee',
      initiatedOn: '08-Apr-24 11:00AM',
      RaisedTo: 'Kumar P',
      Role: 'BOM',
      Status: 'Pending Approval',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84581',
      IncidentRaised: 'Counterfeit Note Report',
      InitialtedByemployeeId: 'KLBLM18178',
      InitialtedBy: 'David Kim',
      initiatedOn: '09-Apr-24 01:30PM',
      RaisedTo: 'Nina L',
      Role: 'Manager',
      Status: 'Pending Approval',
      Remarks: 'Counterfeit Report'
    },
    {
      RequestID: 'M84582',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18179',
      InitialtedBy: 'Emma Watson',
      initiatedOn: '10-Apr-24 09:00AM',
      RaisedTo: 'Oliver Q',
      Role: 'BOM',
      Status: 'Approved',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84583',
      IncidentRaised: 'Suspected Counterfeit Note',
      InitialtedByemployeeId: 'KLBLM18180',
      InitialtedBy: 'Frank N',
      initiatedOn: '11-Apr-24 03:15PM',
      RaisedTo: 'Sophia W',
      Role: 'Supervisor',
      Status: 'Rejected',
      Remarks: 'Suspected Counterfeit'
    },
    {
      RequestID: 'M84584',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18181',
      InitialtedBy: 'George H',
      initiatedOn: '12-Apr-24 10:00AM',
      RaisedTo: 'Isabella R',
      Role: 'BOM',
      Status: 'Pending Approval',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84585',
      IncidentRaised: 'Counterfeit Note Report',
      InitialtedByemployeeId: 'KLBLM18182',
      InitialtedBy: 'Hannah S',
      initiatedOn: '13-Apr-24 11:30AM',
      RaisedTo: 'James M',
      Role: 'Manager',
      Status: 'Pending Approval',
      Remarks: 'Counterfeit Report'
    },
    {
      RequestID: 'M84586',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18183',
      InitialtedBy: 'Ivy T',
      initiatedOn: '14-Apr-24 09:45AM',
      RaisedTo: 'Kevin B',
      Role: 'BOM',
      Status: 'Approved',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84587',
      IncidentRaised: 'Suspected Counterfeit Note',
      InitialtedByemployeeId: 'KLBLM18184',
      InitialtedBy: 'Jack P',
      initiatedOn: '15-Apr-24 01:15PM',
      RaisedTo: 'Lily V',
      Role: 'Supervisor',
      Status: 'Rejected',
      Remarks: 'Suspected Counterfeit'
    },
    {
      RequestID: 'M84588',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18185',
      InitialtedBy: 'Kelly G',
      initiatedOn: '16-Apr-24 11:00AM',
      RaisedTo: 'Mason J',
      Role: 'BOM',
      Status: 'Pending Approval',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84589',
      IncidentRaised: 'Counterfeit Note Report',
      InitialtedByemployeeId: 'KLBLM18186',
      InitialtedBy: 'Liam C',
      initiatedOn: '17-Apr-24 02:30PM',
      RaisedTo: 'Nora F',
      Role: 'Manager',
      Status: 'Pending Approval',
      Remarks: 'Counterfeit Report'
    },
    {
      RequestID: 'M84590',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18187',
      InitialtedBy: 'Mia Z',
      initiatedOn: '18-Apr-24 09:15AM',
      RaisedTo: 'Oscar E',
      Role: 'BOM',
      Status: 'Approved',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84591',
      IncidentRaised: 'Suspected Counterfeit Note',
      InitialtedByemployeeId: 'KLBLM18188',
      InitialtedBy: 'Nathan R',
      initiatedOn: '19-Apr-24 03:45PM',
      RaisedTo: 'Paul T',
      Role: 'Supervisor',
      Status: 'Rejected',
      Remarks: 'Suspected Counterfeit'
    },
    {
      RequestID: 'M84592',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18189',
      InitialtedBy: 'Olivia D',
      initiatedOn: '20-Apr-24 10:30AM',
      RaisedTo: 'Quinn W',
      Role: 'BOM',
      Status: 'Pending Approval',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84593',
      IncidentRaised: 'Counterfeit Note Report',
      InitialtedByemployeeId: 'KLBLM18190',
      InitialtedBy: 'Peter K',
      initiatedOn: '21-Apr-24 11:45AM',
      RaisedTo: 'Rachel M',
      Role: 'Manager',
      Status: 'Pending Approval',
      Remarks: 'Counterfeit Report'
    },
    {
      RequestID: 'M84594',
      IncidentRaised: 'Mutilated Note Exchange request',
      InitialtedByemployeeId: 'KLBLM18191',
      InitialtedBy: 'Quincy O',
      initiatedOn: '22-Apr-24 09:30AM',
      RaisedTo: 'Sarah G',
      Role: 'BOM',
      Status: 'Approved',
      Remarks: 'Exchange Request'
    },
    {
      RequestID: 'M84595',
      IncidentRaised: 'Suspected Counterfeit Note',
      InitialtedByemployeeId: 'KLBLM18192',
      InitialtedBy: 'Rita L',
      initiatedOn: '23-Apr-24 02:00PM',
      RaisedTo: 'Tim Y',
      Role: 'Supervisor',
      Status: 'Rejected',
      Remarks: 'Suspected Counterfeit'
    }
  ];
console.log(requests.length)
function CounterFeitNoteDashBoard(props) {

    const navigate = useNavigate();
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [status, setStatus] = useState("");
    const [request, setRequest] = useState({});
  
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
    const handleNavigate =()=>{
     
      navigate('/admin/counter-feit-notes-register')
    
    }
    const [currentPage, setCurrentPage] = useState(1);
    const requestsPerPage = 4;
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

  const totalPages = Math.ceil(requests.length / requestsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="content">
        <Row>
            <Col md='12'>
            <Card >
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
          <button className="search-button" onClick={handleNavigate}>
            Add Entry
          </button>
          
        </div>
            </Card>
            </Col>
        </Row>
        <Row>
            <Col md='12'>
            <Card>
            {/* <CardHeader>
          <h4 className="title">Select Date Range</h4>
        </CardHeader> */}

        <div className="table-container">
          <table className="data-table table" style={{ fontSize: "0.9rem" }}>
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
              {/* <tr>
              <td><a class="link-underline-primary" href="#" onClick={handleRowClick}>M47483</a></td>
              <td>Mutilated Note Exchange Request</td>
              <td>Manas Sen</td>
              <td>kmbl187007</td>
              <td>04-April-2024 11:30 AM</td>
              <td>Haresh H</td>
              <td>BOM</td>
              <td>Approval Pending</td>
              <td>Exchange Request</td>
            </tr> */}
              {currentRequests.map((request) => {
                return (
                  <tr key={request.RequestID}>
                    <th scope="row">
                      <a style={{ textDecoration: "underline" }} href="#">
                        {request.RequestID}
                      </a>
                    </th>
                    <td>{request.IncidentRaised}</td>
                    <td>{request.InitialtedBy}</td>
                    <td>{request.InitialtedByemployeeId}</td>
                    <td>{request.initiatedOn}</td>
                    <td>{request.RaisedTo}</td>
                    <td>{request.Role}</td>
                    <td>{request.Status}</td>
                    <td>{request.Remarks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Pagination  className="d-flex justify-content-end mr-3">
          {/* <div className="pagination-container">
          <ul className="pagination"> */}

          <PaginationItem
            className={`page-item ${
              currentPage === 1 ? "disabled" : ""
            } `}
            // style={{textColor:'red'}}
          >
            <PaginationLink onClick={handlePrevPage} className="page-link">
              Prev
            </PaginationLink>
          </PaginationItem>
          {[...Array(totalPages).keys()].map((number) => (
            <PaginationItem
              key={number + 1}
              className={`${
                currentPage === number + 1 ? "active" : ""
              } `}
            >
              <PaginationLink
                onClick={() => handlePageChange(number + 1)}
                className="page-link"
              >
                {number + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <PaginationLink onClick={handleNextPage} className="page-link">
              Next
            </PaginationLink>
          </PaginationItem>
          {/* </ul> */}
          {/* </div> */}
        </Pagination>
            </Card>
            </Col>
        </Row>
       
      </div>
    </>
  );
}

export default CounterFeitNoteDashBoard;
