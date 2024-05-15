import React from "react";
import "./Dashboard.css";

import Sidebar from "../../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="dashBoard">
      <Sidebar />
      <div className="dashBoard-container">
        <p>Dashboard</p>
        <div className="div1">
          <p>
            Welcome to Intelli Flow!
            <br />
            Execute your first Automation in 5 easy steps.
          </p>
          <button type="button" className="btn btn-primary">
            Get Strated
          </button>
        </div>
        <div className="div2 d-flex mt-3">
          <section className="subdiv1">
            <p>Workflow Runs</p>
          </section>
          <section className="right-div">
            <div className="subdiv2 mb-2">
              <p>Task Runs</p>
            </div>
            <div className="subdiv3">
              <p>Upcoming Runs</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
