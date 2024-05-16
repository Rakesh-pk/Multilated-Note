import React, { useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
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
} from "reactstrap";
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import RegisterPage from "./ListOfNotes";
import MakerRole from "./makeRole";
import MakerRole2 from "./makerRole2";

function Dashboard(props) {

 const navigate = useNavigate()

const handleNavigate =()=>{
   
  navigate('/admin/tally')

}


  return (
    <>
     <div className="content">
        <Row>
          <Col md="12">
            <Card>
            <h4 className="p-2">Pending Requests</h4>
        <Table className="ml-3" bordered style={{ width: "97%" }}>
        <tbody>
            <tr>
              <td className="text-center font-weight-bold">Pending Since</td>
              <td className="text-center font-weight-bold">1</td>
              <td className="text-center font-weight-bold">2</td>
              <td className="text-center font-weight-bold">3</td>
              <td className="text-center font-weight-bold">7</td>
              <td className="text-center font-weight-bold">15</td>
              <td className="text-center font-weight-bold">30</td>
              <td className="text-center font-weight-bold">Total</td>
            </tr>
            <tr>
          <td className="text-center font-weight-bold">Count</td>
          <td className="text-center font-weight-bold"><a className="link-offset-2 link-underline link-underline-opacity-0 " href="#">1</a></td>
          <td className="text-center font-weight-bold"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">0</a></td>
          <td className="text-center font-weight-bold"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">3</a></td>
          <td className="text-center font-weight-bold"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">7</a></td>
          <td className="text-center font-weight-bold"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">1</a></td>
          <td className="text-center font-weight-bold"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">4</a></td>
          <td className="text-center font-weight-bold"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">16</a></td>
        </tr>
          </tbody>
        </Table>
  
       
        <div className="flex-end w-500 entry-btn">
          <Button onClick={handleNavigate} className="mr-4 bg-light add-entry-btn">Add Entry</Button>
        </div>
        
        <RegisterPage />
        <br />
        </Card>
     </Col>
     </Row>
      </div>
    </>
  );
}

export default Dashboard;
