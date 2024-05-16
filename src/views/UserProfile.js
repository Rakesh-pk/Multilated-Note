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
} from "reactstrap";

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
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h4 className="title">Customer Receipt</h4>
              </CardHeader>
              <CardBody className="mt-n4">
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="2">
                      <p>Customer Type</p>
                    </Col>
                    <Col className="pr-md-1" md="2">
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

                  <Row>
                    <Col lassName="pl-md-1" md="12">
                      <div className="table-container">
                        <table className="data-table table-bordered table-blue-border">
                          <thead>
                            <tr>
                              <th
                                colSpan="1"
                                className="th-background-colour"
                              ></th>
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
                              <th className="th-background-colour">
                                Denomination
                              </th>
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
                              <td>100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>

              {/* </Col> */}
            </Card>
          </Col>
        </Row>
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
                            <td>half value</td>
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
                            <td>Rejcted</td>
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
                  <Row>
                    <Col className="pr-md-1" md="2">
                      <p>Payment Done via:</p>
                    </Col>
                    <Col className="pr-md-1" md="2">
                      <FormGroup>
                        <label>
                          <input
                            type="radio"
                            name="customerType"
                            value="kotak"
                          />
                          Cash
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
                          Customer Account
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
                        <label>Customer Name</label>
                        <Input placeholder="Customer Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="2">
                      <FormGroup>
                        <label>Operational/Unusual Event Id</label>
                        <Input placeholder="Operational" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Remarks</label>
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
                    <Col className="pr-md-1" md="3">
                      <FormGroup>
                        <label>Employee Id</label>
                        <Input placeholder="Employee Id" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Employee Name</label>
                        <Input placeholder="Employee Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">HRMS Role</label>
                        <Input placeholder="HRMS Role" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="mt-n4 save-tally">
                <Button className="btn-fill" color="primary" type="submit">
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