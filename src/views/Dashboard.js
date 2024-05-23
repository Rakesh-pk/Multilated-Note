import React, { useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import './makerRole.css'

import {

  CardHeader,

  Table,
  Row,
  Col,
  Card,

  
} from "reactstrap";

import RegisterPage from "./ListOfNotes";
// import BreadCrumbs from "./BreadCrumbs";

function Dashboard(props) {

 const navigate = useNavigate()




  return (
    <>
      <div className="content">
        {/* <BreadCrumbs /> */}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h4 className="title">Pending Requests</h4>
              </CardHeader>
              <Table className="ml-3" bordered style={{ width: "97%" }}>
                <tbody>
                  <tr>
                    <td className="text-center font-weight-bold">
                      Pending Since
                    </td>
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
                    <td className="text-center font-weight-bold">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0 "
                        href="#"
                      >
                        1
                      </a>
                    </td>
                    <td className="text-center font-weight-bold">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        0
                      </a>
                    </td>
                    <td className="text-center font-weight-bold">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        3
                      </a>
                    </td>
                    <td className="text-center font-weight-bold">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        7
                      </a>
                    </td>
                    <td className="text-center font-weight-bold">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        1
                      </a>
                    </td>
                    <td className="text-center font-weight-bold">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        4
                      </a>
                    </td>
                    <td className="text-center font-weight-bold">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        16
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
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
