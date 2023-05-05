import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

function LinkOtherJobsites() {
  return (
    <div className="link-other-jobsites">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <div className="find-job-slogan">All in one Software for Security companies</div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="/agencies">
                  <div className="agencies-block">Manage Security Guard</div>
                </a>
              </Col>

              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="/agencies">
                  <div className="agencies-block">Manage Subcontractors</div>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="/agencies">
                  <div className="agencies-block">Manage Invoices</div>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="/agencies">
                  <div className="agencies-block">Track Security Guard</div>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="/agencies">
                  <div className="agencies-block">Track Timesheets</div>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="/agencies">
                  <div className="agencies-block">Manage Clients</div>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <a href="/agencies">
          <Button className="m-auto d-block" outline>See all companies</Button>
        </a>
      </Container>

    </div>
  );
}

export default LinkOtherJobsites;