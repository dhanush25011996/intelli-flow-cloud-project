import React from "react";
import "./Workflows.css";

// Import Sidebar
import Sidebar from "../../components/Sidebar";

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faSearch,
  faAngleDown,
  faDotCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

const Workflows = () => {
  const handleCreateWorkflowBox = () => {
    console.log("+ button clicked");
  };

  return (
    <div className="workflowsection">
      <Sidebar />

      <div className="workflowRight">
        <p className="workflowRight-para">Workflows</p>
        <div className="workflowRight-searchAndFilter">
          <div className="inputWithIcon">
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="faPlusCircle"
              onClick={handleCreateWorkflowBox}
            />
          </div>

          <div className="inputWithIcon">
            <FontAwesomeIcon icon={faSearch} className="faSearch" />
            <input
              type="text"
              placeholder="Workflow Names"
              className="workflowNamesIp"
            />
          </div>

          <div className="inputWithIcon">
            <input
              type="text"
              placeholder="All tags"
              className="workflowNamesIp"
            />
            <FontAwesomeIcon icon={faAngleDown} className="faAngleDown" />
          </div>

          <div className="inputWithIcon">
            <input
              type="text"
              placeholder="Created"
              className="workflowNamesIp"
            />
            <FontAwesomeIcon icon={faAngleDown} className="faAngleDown" />
          </div>
        </div>

        {/* Table */}
        <div className="workflowTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Last Run</th>
                <th>Next Run</th>
                <th>Deployed</th>
                <th>Activity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Workflow 1</td>
                <td>May 12, 2024</td>
                <td>May 15, 2024</td>
                <td><FontAwesomeIcon icon={faDotCircle} style={{ color: 'green' }} /></td>
                <td className="statusBarTableData">
                  <div className="statusBar">
                    <div className="statusProgress"></div>
                  </div>
                </td>
                <td>
                  <div className="options">
                    <FontAwesomeIcon icon={faEllipsisV} />
                    <div className="optionsContent">
                      <p>Edit</p>
                      <p>Delete</p>
                      <p>Run</p>
                    </div>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workflows;
