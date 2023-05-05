import React, { useEffect, useState, useMemo } from "react";

// core components
import Navbar from "components/Navbar.js";
import JobSearchForm from "components/JobSearchForm.js";
import JobSearchFilter from 'views/jobs/JobSearchFilter.js'
import RecommendedCourses from 'views/jobs/RecommendedCourses.js'
import JobCard from "components/JobCard2";

import Footer from "components/Footer.js";
import { Col, Row, Container, Button } from "reactstrap";
import PaginationComponent from "react-reactstrap-pagination";
import { useDispatch, connect, useSelector } from "react-redux";
import { getJobRequest } from 'redux/action/job';
import JobSkeleton from "components/JobSkeleton";
import Skeleton from "react-loading-skeleton";

// sections for this page


function Jobs() {
  const loading = useSelector(state => state.job.loading)
  const filters = useSelector(state => state.job.filters)
  const [selectedPage, setSelectedPage] = useState(1)
  const data = useSelector(state => state.job.jobs)
  const dispatch = useDispatch();
  const pageSize = 4

  useEffect(() => {
    dispatch(getJobRequest(filters))
  }, []);

  const handleSelected = (page) => {
    setSelectedPage(page)
  }

  return (
    <div className="jobs">
      <Navbar />
      <div className="search-form-wrapper"><Container><JobSearchForm className="in-jobs" /></Container></div>
      <Container>
        <Row>
          <Col md={4}>
            <JobSearchFilter />
            {/* <RecommendedCourses /> */}
          </Col>
          <Col md={8}>
            {loading ? <JobSkeleton /> : data.slice((selectedPage - 1) * pageSize, selectedPage * pageSize).map((c, i) =>
              <JobCard key={i} jobdata={c} id={i} />
            )}
            {data.length ? <PaginationComponent
              totalItems={data.length}
              pageSize={pageSize}
              onSelect={handleSelected}
              firstPageText="<<"
              previousPageText="<"
              nextPageText=">"
              lastPageText=">>"
              maxPaginationNumbers={4}
            /> :
              <div className="text-center">
                <div className="font-weight-bold">No results matched your search</div>
                <div>Try a different search for better results</div>
              </div>
            }
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Jobs;
