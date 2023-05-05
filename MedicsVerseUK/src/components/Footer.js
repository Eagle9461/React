/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  const footerTags = [
    {
      title: 'JOBS',
      data: [
        {
          text: "Contact us",
          link: "#"
        }, {
          text: "Job search",
          link: "#"
        }, {
          text: "Recruiter directory",
          link: "#"
        }
      ]
    }, {
      title: 'RECRUITER',
      data: [
        {
          text: "Recruiter site",
          link: "#"
        }, {
          text: "Post a job",
          link: "#"
        }, {
          text: "CV Search",
          link: "#"
        }
      ]
    }, {
      title: 'COURSES',
      data: [
        {
          text: "Help",
          link: "#"
        }, {
          text: "Contact us",
          link: "#"
        }, {
          text: "Find a course",
          link: "#"
        }
      ]
    }, {
      title: 'MORE FROM ELON.UK',
      data: [
        {
          text: "About us",
          link: "#"
        }, {
          text: "Careers",
          link: "#"
        }, {
          text: "Press office",
          link: "#"
        }
      ]
    },
  ]
  return (
    <footer className="footer" style={{ background: "#081351", color: "white" }}>
      <Container>
        <div className="row">
          {
            footerTags.map((c, i) =>
              <div key={i} className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3">{c.title}</h5>
                <ul className="list-unstyled mb-0">
                  {c.data.map((cu, ind) =>
                    <li key={ind} className="mb-1 d-block">
                      <a href={cu.link}>{cu.text}</a>
                    </li>
                  )}

                </ul>
              </div>
            )
          }

        </div>
        <div className="text-right">
          <h2> All in one solution</h2>
          <h2>for Security Sector</h2>

        </div>

      </Container>
    </footer>
  );
}

export default DarkFooter;
