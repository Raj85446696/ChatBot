import React, { useState } from "react";
import "./Sidebar.css";
import { MdMenu, MdOutlineQuestionMark, MdHistory } from "react-icons/md";
import { IoIosAdd, IoMdSettings } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { FaGem } from "react-icons/fa";

function Sidebar() {
  const [extend, setExtend] = useState(false);

  return (
    <div className={`sidebar-container ${extend ? "expanded" : ""}`}>
      <MdMenu className="menu" size={30} onClick={() => setExtend(!extend)} />
      <div className={`sidebar ${extend ? "show" : "hide"}`}>
        <div className="top">
          <div className="new-chat">
            <IoIosAdd size={25} />
            <p>New Chat</p>
          </div>
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <CiChat1 size={25} />
              <p>What is React...</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <FaGem size={25} />
            <p>Gem Manager</p>
          </div>
          <div className="bottom-item recent-entry">
            <MdOutlineQuestionMark size={25} />
            <p>Help</p>
          </div>
          <div className="bottom-item recent-entry">
            <MdHistory size={25} />
            <p>Activity</p>
          </div>
          <div className="bottom-item recent-entry">
            <IoMdSettings size={25} />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
