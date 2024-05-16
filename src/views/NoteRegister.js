import React from "react";
import {useState} from "react";

// reactstrap components
import { useNavigate } from "react-router-dom";


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

function NoteRegister() {
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
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card >
              <CardHeader>
                <h4 className="title">Note Register</h4>
              </CardHeader>
              <CardBody className="ml-n5">
                <div className="role-component container">
                  {/* ref={ref} */}
                  <Form>
                  <Row>
                    <Col className="pr-md-1" md="3">
                      <p>Customer Type</p>
                    </Col>
                    <Col className="pr-md-1" md="3">
                      <FormGroup>
                        <label>
                          <input
                            type="radio"
                            name="customerType"
                            value="kotak"
                          />
                          Kotak Bank Account Holder
                        </label>
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="2">
                      <FormGroup>
                        <label>
                          <input
                            type="radio"
                            name="customerType"
                            value="walkin"
                          />
                          Walk-in Customer
                        </label>
                      </FormGroup>
                    </Col>
                    {/* <Col className="pr-md-1" md="3">
                    <div className="note mb-3">
            Note: Differential amount ( Receipt - Payment ) of Rs 1000 is
            credited in the GL
          </div>
                      </Col> */}
                  </Row>

                  <Row>
                    <Col className="pr-md-1" md="2">
                      <FormGroup>
                        <label>CRN</label>
                        <Input placeholder="CRN" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="2">
                      <FormGroup>
                        <label>Account Number</label>
                        <Input placeholder="Account Number" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="2">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Customer Name
                        </label>
                        <Input placeholder="Customer Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="2">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Contact Number
                        </label>
                        <Input placeholder="Contact Number" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="2">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Customer Address
                        </label>
                        <Input placeholder="Customer Address" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  </Form>

                  <div className="amount-receipt-table">
                    <h3>Amount Receipt from Customer</h3>
                    <table>
                      <thead>
                        <tr>
                          <th colSpan="1" className="th-background-colour"></th>
                          <th colSpan="9" className="th-background-colour">
                            Notes
                          </th>
                          <th
                            colSpan="2"
                            className="th-background-colour"
                            rowSpan="2"
                          >
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
                              onChange={(e) =>
                                handleInputChange(e.target.value, 500)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 200)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 100)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 50)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 20)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 10)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 5)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 2)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="table-input"
                              onChange={(e) =>
                                handleInputChange(e.target.value, 1)
                              }
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NoteRegister;