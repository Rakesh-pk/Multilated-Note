import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import { TfiComment } from "react-icons/tfi";
function FirReportingRegister() {
  return (
    <div className="content">
    
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <h4 className="title">Counter Feit Fir Reporting Register</h4>
          </CardHeader>
          <CardBody>
              <Table bordered>
               
                  <tr>
                    <th className='text-white bg-info'>#</th>
                    <th className='text-white bg-info'>Pending with Police at the beginning of the month (Cumulative Total) (A)</th>
                    <th className='text-white bg-info'>Sent to Police during the month (B)</th>
                    <th className='text-white bg-info'>Returned by the Police during the month (C)</th>
                    <th className='text-white bg-info'>Pending with Police at the end of the month (Cumulative Total) (D=A+B-C)</th>
                  </tr>
               
                <tbody>
                  <tr>
                  <th scope="row">Total pieces of Counterfeit Notes involved in all the cases of FIR</th>
                    <td className='text-center'>50</td>
                    <td className='text-center'>2</td>
                    <td className='text-center'>0</td>
                    <td className='text-center'>52</td>
                  </tr> 
                 
                  <tr>
                  <th scope="row">No. of cases* where FIR was filed</th>
                    <td className='text-center disabled' ><input type='text' disabled className='w-100 h-100' value='200'/></td>
                    <td className='text-center'>8</td>
                    <td className='text-center'>1</td>
                    <td className='text-center'>207</td>
                  </tr>
                </tbody>
              </Table>
            <Row>
                <Col md='9'>
                <FormGroup>
                <Label>Remarks</Label>
                <Input type="textarea" />
              </FormGroup>
             
                </Col>
                
            </Row>
            <Row>
                
                <Col>
                <Button className="btn-info">Submit</Button></Col>
            </Row>
            </CardBody>
          
        </Card>
      </Col>
    </Row>
    
  </div>
  )
}

export default FirReportingRegister