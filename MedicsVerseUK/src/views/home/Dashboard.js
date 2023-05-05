/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";
import JobSearchForm from "components/JobSearchForm";
// core components

function Dashboard() {

  return (
    <div className="page-header dashboard">
      <Container>
        <Row>
          <div className="col-md text-left">
            <div className="site-slogan m-auto">All	in	one	solution	for	Security	Sector</div>
            <div className="site-slogan-sub m-auto">Find a job you'll love</div>
          </div>
          <div className="col-md text-left">
            <img alt="..." className="site-dashboard-img" src={require("assets/img/dl.beatsnoop 1.png")}></img>
          </div>
        </Row>
        <JobSearchForm/>

        <div className="new-job-notify-text">Search 227,388 new jobs - 11,801 added in the last 24 hours</div>
      </Container>
      <div className="header-end">January flash sale: Shop courses from $10</div>
    </div>
  );
}

export default Dashboard;
