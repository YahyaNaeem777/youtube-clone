import React from "react";
import "./Header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiFillYoutube } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Header = ({handleToggleSidebar}) => {
  return (
    <div className="header">
      <div>
        <FaBars className="header_menu" size={22} 
        
      onClick={()=>handleToggleSidebar()}

        />
        <AiFillYoutube className="header_logo" size={28} />
      </div>
      <form>
        <input type="text" placeholder="search" />
        <button type="submit">
          <AiOutlineSearch size={22} className="search_icon" />
        </button>
      </form>
      <div className="header_icons">
        <MdNotifications className="individual-icon" size={26} />
        <MdApps className="individual-icon" size={28} />
        <RxAvatar className="avatar" size={28} />
      </div>
    </div>
  );
};

export default Header;
