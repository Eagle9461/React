import JobCard from "components/JobCard";
import CareerAdviceCard from "components/CareerAdviceCard";
import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
// core components

function TrendingJobsSearch() {
  return (
    <Container className="support-for-you">
      <div className="title-main">Support for you</div>
      <Row>
        <Col sm={12} md={6}>
          <div className="title-2">Upskills with courses</div>
          <img src={require("assets/img/image 1.png")} width={"70%"} />
          <JobCard />
          <div>Invest in your future with thousands of courses to help you learn and develop.        </div>
          <a href="/courses">
            <Button className="d-block m-auto" outline>Browse Courses</Button>
          </a>
        </Col>
        <Col sm={12} md={6} className="career-advice-container">
          <div className="title-2">Career advice</div>
          <Row>
            <Col md={6} sm={6} xs={12}>
              <CareerAdviceCard />
            </Col>
            <Col md={6} sm={6} xs={12}>
              <CareerAdviceCard />
            </Col>
          </Row>
          <div style={{ marginTop: "auto" }}>
            <div>Take your job search to the next level with our expert tips and career advice. Browse jobs   </div>
            <Button className="d-block m-auto" outline>
              <a href="/jobs">
                Browse Jobs
              </a>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TrendingJobsSearch;