import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col, Label, Table } from "reactstrap";
import { FaPaperclip } from "react-icons/fa";

function CounterfeitNoteForm() {
  const navigate = useNavigate();
  const [customerType, setCustomerType] = useState('kotak');
  const [numberOfNotes, setNumberOfNotes] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const [noteDetails, setNoteDetails] = useState([
    {
      detectionDate: '',
      denomination: '',
      denominationType: '',
      securityFeature: '',
      serialNumber: '',
      policeReportingDate: '',
      returnFromPoliceDate: '',
      rbiSubmissionDate: ''
    }
  ]);

  const handleNumberOfNotesChange = (e) => {
    const newNumberOfNotes = Number(e.target.value);
    setNumberOfNotes(newNumberOfNotes);

    const updatedNoteDetails = [...noteDetails];
    if (newNumberOfNotes > noteDetails.length) {
      for (let i = noteDetails.length; i < newNumberOfNotes; i++) {
        updatedNoteDetails.push({
          detectionDate: '',
          denomination: '',
          denominationType: '',
          securityFeature: '',
          serialNumber: '',
          policeReportingDate: '',
          returnFromPoliceDate: '',
          rbiSubmissionDate: ''
        });
      }
    } else {
      updatedNoteDetails.length = newNumberOfNotes;
    }
    setNoteDetails(updatedNoteDetails);
  };

  const handleCFNoteRegister = () => {
    navigate('/admin/counter-feit-notes-dashboard');
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const removeSelectedFile = () => {
    setSelectedFile(null);
  };
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h4 className="title">Counterfeit Note Register</h4>
            </CardHeader>
            <CardBody>
              <h4>Counterfeit Note Identified for</h4>
              <Form>
              <Row>
        <Col md="2">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="customerType"
                value="kotak"
                checked={customerType === "kotak"}
                onChange={() => setCustomerType("kotak")}
              />
              Kotak Bank Account Holder
            </Label>
          </FormGroup>
        </Col>
        <Col md="2">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="customerType"
                value="walkin"
                checked={customerType === "walkin"}
                onChange={() => setCustomerType("walkin")}
              />
              Walk-in Customer
            </Label>
          </FormGroup>
        </Col>
        <Col md="2">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="customerType"
                value="crm"
                checked={customerType === "crm"}
                onChange={() => setCustomerType("crm")}
              />
              CRM
            </Label>
          </FormGroup>
        </Col>
        <Col md="2">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="customerType"
                value="currencyChest"
                checked={customerType === "currencyChest"}
                onChange={() => setCustomerType("currencyChest")}
              />
              Currency Chest
            </Label>
          </FormGroup>
        </Col>
      </Row>
      {(customerType === "kotak" || 
        customerType === "currencyChest") && (
        <Row>
          <Col md="2">
            <FormGroup>
              <Label>CRN</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Account Number</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Customer Name</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Contact Number</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Customer's Address</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
        </Row>
      )}
      {
        customerType === "walkin" && (
          <Row>
          <Col md="2">
            <FormGroup>
              <Label>Customer Name</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Customer's Number</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Customer's Address</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          </Row>
        )
      }
      {customerType === "crm" && ( <>
        <Row>
          <Col md="2">
            <FormGroup>
              <Label>Vendor Name</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Vendor's Number</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Vendor's Address</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
         
        </Row>
        <Row>
          <Col md="2">
            <FormGroup>
              <Label>CRN</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Account Number</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Customer Name</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Contact Number</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label>Customer's Address</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
        </Row>

        </>
      )}
      <h5>Note details</h5>
      <Row>
        <Col md="2">
          <FormGroup>
            <Label>Number of Note Pieces</Label>
            <Input
              type="text"
              value={numberOfNotes}
              onChange={handleNumberOfNotesChange}
            />
          </FormGroup>
        </Col>
      </Row>
                <div style={{ textAlign: "right", marginBottom: "10px" }}>
                  <small>All fields marked with * are required</small>
                </div>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Detection Date *</th>
                      <th>Denomination *</th>
                      <th>Denomination Type *</th>
                      <th>Security Feature Breached *</th>
                      <th>Serial Number *</th>
                      <th>Police Reporting Date</th>
                      <th>Return from Police Date</th>
                      <th>RBI Submission Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {noteDetails.map((detail, index) => (
                      <tr key={index}>
                        <td>
                          <Input
                            type="date"
                            value={detail.detectionDate}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].detectionDate =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                            required
                          />
                        </td>
                        <td>
                          <Input
                            type="select"
                            value={detail.denomination}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].denomination =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                            required
                          >
                            <option>500</option>
                            <option>200</option>
                            <option>100</option>
                            <option>50</option>
                            <option>20</option>
                            <option>10</option>
                            <option>5</option>
                            <option>2</option>
                            <option>1</option>
                          </Input>
                        </td>
                        <td>
                          <Input
                            type="select"
                            value={detail.denominationType}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].denominationType =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                            required
                          >
                            <option>Old</option>
                            <option>New</option>
                          </Input>
                        </td>
                        <td>
                          <Input
                            type="select"
                            value={detail.securityFeature}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].securityFeature =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                            required
                          >
                            <option>Paper Quality Issue</option>
                            <option>Others</option>
                          </Input>
                        </td>
                        <td>
                          <Input
                            type="text"
                            value={detail.serialNumber}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].serialNumber =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                            required
                          />
                        </td>
                        <td>
                          <Input
                            type="date"
                            value={detail.policeReportingDate}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].policeReportingDate =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                          />
                        </td>
                        <td>
                          <Input
                            type="date"
                            value={detail.returnFromPoliceDate}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].returnFromPoliceDate =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                          />
                        </td>
                        <td>
                          <Input
                            type="date"
                            value={detail.rbiSubmissionDate}
                            onChange={(e) => {
                              const updatedDetails = [...noteDetails];
                              updatedDetails[index].rbiSubmissionDate =
                                e.target.value;
                              setNoteDetails(updatedDetails);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Row>
                    <Col md="2">
                      <FormGroup>
                        <Label>Kraman Case Id</Label>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                </Row>
                {numberOfNotes >= 5 && (
                  <Row>
                    <Col md="3">
                      <FormGroup>
                        <Label>Date of FIR</Label>
                        <Input type="date" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <Label>FIR Reference Number</Label>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <Label>
                          Attach FIR Copy{" "}
                          <FaPaperclip
                            size={22}
                            style={{
                              verticalAlign: "middle",
                              position: "relative",
                              top: "34px",
                              right: "66px",
                              cursor: "pointer",
                            }}
                          />
                          <Input type="file" onChange={handleFileChange} />
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      {selectedFile && (
                        <span className="selected-file ">
                          {selectedFile.name}
                          <button
                            className="remove-file"
                            onClick={removeSelectedFile}
                          >
                            x
                          </button>
                        </span>
                      )}
                    </Col>
                  </Row>
                )}

                <Button
                  className="btn-info"
                  type="submit"
                  onClick={handleCFNoteRegister}
                >
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CounterfeitNoteForm;
