import React from "react";
import {useState} from "react";

// reactstrap components
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
  Label,
} from "reactstrap";
import NoteRegister from "./NoteRegister";

function UserProfile() {
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

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
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
    <>
      <div className="content">
        <NoteRegister/>
        {/* 2nd //////////////////////// */}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h4 className="title">Amount Receipt from Customer</h4>
              </CardHeader>
              <CardBody className="mt-n4">
                <Form>
                  <Row>
                    <div className="table-container " style={{ width: "97%" }}>
                      <table className="data-table table-bordered ml-3 table-blue-border">
                        <thead>
                          <tr className="overTableHead">
                            <th colSpan="1" >Denomination</th>
                            <th colSpan="9" className="text-center">Notes</th>
                            <th colSpan="1" rowSpan="2" className="text-center">
                              Total Number of pieces
                            </th>
                            <th colSpan="1" rowSpan="2" className="text-center">
                              Total Value
                            </th>
                          </tr>
                          <tr className="overTableHead">
                            <th></th>
                            <th className="text-center">500</th>
                            <th className="text-center">200</th>
                            <th className="text-center">100</th>
                            <th className="text-center">50</th>
                            <th className="text-center">20</th>
                            <th className="text-center">10</th>
                            <th className="text-center">5</th>
                            <th className="text-center">2</th>
                            <th className="text-center">1</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="input-table-row">
                            <td className="text-center ">full Value</td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 500)
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 200)
                                }
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 100)
                                }
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 50)
                                }
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 20)
                                }
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 10)
                                }
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 5)
                                }
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 2)
                                }
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handlInputFullValue(e.target.value, 1)
                                }
                                disabled
                              />
                            </td>
                            <td>{/* Total number of pieces */}</td>
                            <td>{fullValue}</td>
                          </tr>
                          <tr className="input-table-row">
                            <td className="text-center ">half Value</td>
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
                            <td>{/* Total number of pieces */}</td>
                            <td>{totalValue}</td>
                          </tr>
                          <tr className="input-table-row">
                            <td className="text-center ">Rejected</td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
                            <td>
                              <input type="number" className="table-input" />
                            </td>
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
                            <td>Total</td>
                            <td>{totalValue + fullValue}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Row>
                </Form>
              </CardBody>
              {/* <Col className="pr-md-1" md="3"> */}
              <div className="note-container">
                <div className="note mb-3 ml-3">
                  Note: Differential amount ( Receipt - Payment ) of Rs 1000 is
                  credited in the GL
                </div>
              </div>
              {/* </Col> */}
            </Card>
          </Col>
        </Row>
        {/* 3//////////////////////////////// */}
        <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <h4 className="title">Payment</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <Row className="mb-2">
                <Col md="3">
                  <p>Payment Done via:</p>
                </Col>
                <Col md="2">
                  <FormGroup>
                    <Label>
                      <Input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={handlePaymentMethodChange}
                      />
                      Cash
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="2">
                  <FormGroup>
                    <Label>
                      <Input
                        type="radio"
                        name="paymentMethod"
                        value="customerAccount"
                        checked={paymentMethod === "customerAccount"}
                        onChange={handlePaymentMethodChange}
                      />
                      Customer Account
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="3">
                  <FormGroup>
                    <Label>Customer Name</Label>
                    <Input placeholder="Customer Name" type="text" />
                  </FormGroup>
                </Col>
                
                {paymentMethod === "customerAccount" && (
                  <Col md="3">
                    <FormGroup>
                      <Label>Account Number</Label>
                      <Input placeholder="Account Number" type="text" />
                    </FormGroup>
                  </Col>
                )}
              </Row>
              { (
                <Row className="mb-3">
                  <Col md="3">
                    <FormGroup>
                      <Label>Operational/Unusual Event Id</Label>
                      <Input placeholder="Operational" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col md="5">
                  <FormGroup>
                    <Label>Remarks</Label>
                    <Input placeholder="Remarks" type="textarea" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
        {/* 4rd */}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h4 className="title">Approving Authority</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-4" md="4">
                      <FormGroup>
                        <label>Employee Id</label>
                        <Input placeholder="Employee Id" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Employee Name</label>
                        <Input placeholder="Employee Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">HRMS Role</label>
                        <Input placeholder="HRMS Role" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="mt-n4 save-tally">
                <Button className="submit-btn ml-5" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
