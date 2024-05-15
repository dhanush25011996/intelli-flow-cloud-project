import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import profile from "./profile.jpg";
import {
  faCircleChevronDown,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <section className="sideMenu-top">
        <div className="logo"></div>
        <div className="project">
          <div className="proj-name">
            <p>Business Name</p>
            <p>Project Name</p>
          </div>
          <div>
            <FontAwesomeIcon className="downArrow" icon={faCircleChevronDown} />
          </div>
        </div>
      </section>
      <section className="sideMenu-middle">
        <nav>
          <ul>
            <li>
              <Link to="/dashboard" className="SideMenu-list">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/workflows" className="SideMenu-list">
                Workflows
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list">
                Executions
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list">
                Ad hoc Execution
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list">
                Schedules
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list">
                Reports
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list">
                Vault
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list">
                Devices
              </Link>
            </li>
            {/* <Accordion className='accordion' defaultActiveKey="0">
                    <Accordion.Item className='accordion-item' eventKey="0">
                        <Accordion.Header className='accordion-header'>Settings</Accordion.Header>
                        <Accordion.Body className='accordion-body'>
                        <Link to='#' className='SideMenu-list'>General</Link>
                        <Link to='#' className='SideMenu-list'>General</Link>
                        <Link to='#' className='SideMenu-list'>General</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            <li>
              <Link to="#" className="SideMenu-list setting">
                Settings
                <div>
                  <FontAwesomeIcon
                    className="rgtArrow"
                    icon={faCircleChevronRight}
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list setting-sub">
                General
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list setting-sub">
                Account Settings
              </Link>
            </li>
            <li>
              <Link to="#" className="SideMenu-list setting-sub">
                On-Prem Executor
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="sideMenu-bottom">
        <div className="help">
          <FontAwesomeIcon className="question-icon" icon={faCircleQuestion} />
          <p>Help</p>
          <FontAwesomeIcon className="rgtArrow" icon={faCircleChevronRight} />
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
          <section className="profile-name">
            <p>Ramanan AR</p>
            <p>ramanan@gmail.com</p>
          </section>
          <FontAwesomeIcon
            className="rgtArrow profile-arrow"
            icon={faCircleChevronRight}
          />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
