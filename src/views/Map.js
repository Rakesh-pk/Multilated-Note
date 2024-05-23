import React from "react";

// reactstrap components
// import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";



function Map() {
  return (
    <>
      <div className="content">
       <p>Amount Paid To Customer</p>
       
<table class="table table-bordered">
          <tbody>
            <tr>
              <th scope="row"></th>
              <td colspan="9">Notes</td>
              <td rowspan="2">Total No Of Pieces</td>
              <td rowspan="2">Total Value</td>
            </tr>
            <tr>
            <td>Denomination</td>
              <td>500</td>
              <td>200</td>
              <td>100</td>
              <td>50</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
            <td>full value</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>2</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Map;
