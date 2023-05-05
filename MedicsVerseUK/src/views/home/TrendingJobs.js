/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

function TrendingJobs() {
  const TrendingJobsList = [
    {
      text: "NHS Jobs",
      to: "jobs"
    }, {
      text: "Indeed Jobs",
      to: "jobs"
    }, {
      text: "Reed Jobs",
      to: "jobs"
    }, {
      text: "Total Jobs",
      to: "jobs"
    }, {
      text: "ASU Jobs",
      to: "jobs"
    }
  ]

  return (
    <Container className="text-center trending-jobs">
      <div className="title-main">Trending Jobs</div>
      <div className="trending-jobs-btn-group">
        {
          TrendingJobsList.map((c, i) => <Button key={i} tag={Link} to={c.to} outline>{c.text}</Button>)
        }
      </div>
    </Container>
  );
}

export default TrendingJobs;
