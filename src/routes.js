/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import NoteRegister from "views/NoteRegister";
import FinalSubmit from "views/FinalSubmit";

var routes = [
  {
    path: "/Mutilated-notes",
    name: "Mutilated Notes",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/Note-register",
    name: "Note Register",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <NoteRegister/>,
    layout: "/admin",
  },
  {
    path: "/Evaluation",
    name: "Evaluation",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <UserProfile/>,
    layout: "/admin"
  },
  {
    path: "/review",
    name: "Review",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <FinalSubmit/>,
    layout: "/admin",
  },
 
];
export default routes;
