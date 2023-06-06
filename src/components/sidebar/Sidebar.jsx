import React from "react";
import "./Sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

const Sidebar = ({sidebar,handleToggleSidebar}) => {
  return (
    <nav className={sidebar?"sidebar open":"sidebar"}
    onClick={()=>handleToggleSidebar()}
    >
      <li>
        <MdHome />
        <span>Home</span>
      </li>
      
      <li>
        <MdSubscriptions />
        <span>Subscriptions</span>
      </li>
      
      <li>
        <MdThumbUp />
        <span>Liked</span>
      </li>
      
      <li>
        <MdHistory />
        <span>History</span>
      </li>
      
      <li>
        <MdLibraryBooks />
        <span>Library</span>
      </li>
      
      <li>
        <MdSentimentDissatisfied />
        <span>I don't know</span>
      </li>
      <hr />
      <li>
        <MdExitToApp />
        <span>Log Out</span>
      </li>
      <hr />
      
    </nav>
  );
};

export default Sidebar;
