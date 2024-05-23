import React, { useEffect, useState } from "react";

import { useNavigate ,useLocation} from "react-router-dom";
import {
  // Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
// import BreadCrumbs from "./BreadCrumbs";

function NoteRegister({editOrReview}) {

  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const location = useLocation();
  const endpoint = location.pathname;
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
  const [customerType, setCustomerType] = useState('kotak');
  const [isReadOnly, setIsReadOnly] = useState(false);

  useEffect(() => {
    if (endpoint === '/admin/Evaluation') {
      setIsReadOnly(true);
    }
  }, [endpoint]);

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
    navigate("/admin/Mutilated-notes");
  };

  // const handleBack = () => {
  //   navigate(-1)
  // }
  return (
    <>
      <div className="content ">
   
        <Row>
          <Col md="12">
            <Card>
              {endpoint !=='/admin/Note-register' && (<CardHeader>
               {endpoint ==='/admin/Note-register'? (<h4 className="title">Mutilated Notes Register </h4>):(<h4 className="title">Customer Receipt - {editOrReview}</h4>)}
              </CardHeader>)}
              <CardHeader>
               {endpoint ==='/admin/Note-register'? (<h4 className="title">Mutilated Notes Register - Add New Entry  </h4>):(<h4 className="title">Receipt</h4>)}
              </CardHeader>
              <CardBody className="ml-n5">
                <div className="role-component  align-class">
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="2">
                        <p>Customer Type</p>
                      </Col>
                      <Col className="pr-md-1" md="3">
                        <FormGroup>
                          <label>
                            <input
                              type="radio"
                              name="customerType"
                              value="kotak"
                              onChange={() => setCustomerType("kotak")}
                              disabled={isReadOnly}
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
                              onChange={() => setCustomerType("walkin")}
                              disabled={isReadOnly}
                            />
                            Walk-in Customer
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>

                    {customerType === "walkin" ? (
                      <Row>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label>Customer Name</label>
                            <Input placeholder="Customer Name" type="text" disabled={isReadOnly} />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label>Contact Number</label>
                            <Input placeholder="Contact Number" type="text" disabled={isReadOnly}/>
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="3">
                          <FormGroup>
                            <label>Customer Address</label>
                            <Input placeholder="Customer Address" type="text" disabled={isReadOnly} />
                          </FormGroup>
                        </Col>
                      </Row>
                    ) : customerType === "kotak" ? (
                      <Row>
                      <Col className="pr-md-1" md="2">
                        <FormGroup>
                          <label>CRN</label>
                          <Input placeholder="CRN" type="text"  />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="2">
                        <FormGroup>
                          <label>Account Number</label>
                          <Input placeholder="Account Number" type="text" disabled style={{ backgroundColor: '#e9ecef' }} />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="2">
                        <FormGroup>
                          <label>Customer Name</label>
                          <Input placeholder="Customer Name" type="text" disabled style={{ backgroundColor: '#e9ecef' }} />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="2">
                        <FormGroup>
                          <label>Contact Number</label>
                          <Input placeholder="Contact Number" type="text" disabled style={{ backgroundColor: '#e9ecef' }} />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="2">
                        <FormGroup>
                          <label>Customer Address</label>
                          <Input placeholder="Customer Address" type="text" disabled style={{ backgroundColor: '#e9ecef' }} />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    ) : null}

                    <div className="amount-receipt-table">
                      <h3 className="amount-heading">Amount Receipt from Customer</h3>
                      <table>
                        <thead>
                          <tr>
                            <th colSpan="1" className="th-background-colour"></th>
                            <th colSpan="9" className="th-background-colour">
                              Notes
                            </th>
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
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 500)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 200)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 100)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 50)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 20)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 10)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 5)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 2)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                className="table-input"
                                onChange={(e) =>
                                  handleInputChange(e.target.value, 1)
                                }
                                disabled={isReadOnly}
                              />
                            </td>
                            <td>{totalAmount}</td>
                          </tr>
                        </tbody>
                      </table>
                     {endpoint==='/admin/Note-register'&&<button className="save-tally ml-5 mt-4" onClick={handleSaveTally}>
                        Save for final tally
                      </button>}
                     {/* {endpoint==='/admin/Note-register'&&<button className="save-tally ml-5 mt-4" onClick={handleBack}>
                       Go Back
                      </button>} */}
                    </div>
                  </Form>
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
