import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "Login",
  //   path: "/login",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Pricing",
  //   path: "/pricing",
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: "nav-text",
  // },
  {
    title: "Cars",
    path: "/cars",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Bikes",
    path: "/bikes",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];
