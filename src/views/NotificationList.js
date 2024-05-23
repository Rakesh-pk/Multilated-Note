import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
  Button,
} from "reactstrap";
import Swal from 'sweetalert2'

const notifications = [
  { id: 1, message: "New user registration", date: "2024-05-20" },
  { id: 2, message: "Server maintenance at midnight", date: "2024-05-19" },
  { id: 3, message: "New comment on your post", date: "2024-05-18" },
  
];

function NotificationList() {

    const openNotification = (notification)=>{
        Swal.fire({
            title: notification.date,
            text: notification.message,
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "red",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
  return (
    <div className="notification-list content" >
      <Row>
        <Col className="container">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardBody>
              <Table hover>
                <thead>
                  <tr>
                    <th>SR</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.map((notification) => (
                    <tr key={notification.id}>
                      <th scope="row">{notification.id}</th>
                      <td>{notification.message}</td>
                      <td>{notification.date}</td>
                      <td>
                        <Button color="info" size="sm" onClick={()=>openNotification(notification)}>
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default NotificationList;
