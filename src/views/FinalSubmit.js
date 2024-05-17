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
import UserProfile from "./UserProfile";

function FinalSubmit() {
    const [finalSubmit, setFinalSubmit] = useState('');

    const handleRadioChange = (e) => {
      setFinalSubmit(e.target.value);
    };
  
  return (
    <>
      <div className="content">
       <UserProfile/>
       {/* final submit PArt */}
       <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h4 className="title">Check</h4>
            </CardHeader>
            <CardBody className="mt-n4">
              <Form>
                <Row>
                  {/* <Col className="pr-md-1" md="2">
                    <p>Customer Type</p>
                  </Col> */}
                  <Col className="pr-md-1" md="1">
                    <FormGroup>
                      <label>
                        <input
                          type="radio"
                          name="finalSubmit"
                          value="approve"
                          onChange={handleRadioChange}
                        />
                        Approve
                      </label>
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="1">
                    <FormGroup>
                      <label>
                        <input
                          type="radio"
                          name="finalSubmit"
                          value="reject"
                          onChange={handleRadioChange}
                        />
                        Reject
                      </label>
                    </FormGroup>
                  </Col>
                </Row>
                {finalSubmit === 'reject' && (
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Reason for Rejection</label>
                        <textarea className="form-control" rows="3"></textarea>
                      </FormGroup>
                    </Col>
                  </Row>
                )}
                
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

export default FinalSubmit;
