import React, { useState, useEffect } from "react";
import axios from "axios";

// core components
import Navbar from "components/Navbar.js";
import JobSearchForm from "components/JobSearchForm.js";
import CourseSearchFilter from 'views/courses/CourseSearchFilter.js'
import CourseCard from "components/CourseCard";

import Footer from "components/Footer.js";
import { Col, Row, Container, Button, Card, CardBody, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";
import PaginationComponent from "react-reactstrap-pagination";


// sections for this page


function Courses() {
    const [courses, setCourses] = useState([]);
    const [selectedPage, setSelectedPage] = useState(1)
    const pageSize = 4
    useEffect(() => {
        axios.get("http://52.91.178.77/api.php?type=all_courses")
            .then(res => { setCourses(res.data) })
            .catch(err => { })
    }, [])

    const handleSelected = (page) => {
        setSelectedPage(page)
    }
    return (
        <div className="courses">
            <Navbar />
            <div className="search-form-wrapper"><Container><JobSearchForm className="in-jobs" /></Container></div>
            <Container>
                <Row>
                    <Col md={4}>
                        <CourseSearchFilter />
                    </Col>
                    <Col md={8}>
                        {/* <Card className="course-applied-filters">
                            <CardBody>
                                <div className="row">

                                    <div className="col-sm-8 title-2 m-auto">101,878 Courses</div>
                                    <div className="col-sm-4 m-auto">
                                        <UncontrolledDropdown>
                                            <DropdownToggle
                                                aria-expanded={false}
                                                aria-haspopup={true}
                                                caret
                                                color="secondary"
                                                data-toggle="dropdown"
                                                id="dropdownMenuButton"
                                                type="button"
                                                className="sort-by"
                                            >
                                                Sort by
                                            </DropdownToggle>
                                            <DropdownMenu aria-labelledby="dropdownMenuButton">
                                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                    Most relevant
                                                </DropdownItem>
                                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                    Most popular
                                                </DropdownItem>
                                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                    Lowest price
                                                </DropdownItem>
                                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                    Highest price
                                                </DropdownItem>
                                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                    Recently added
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </div>
                            </CardBody>
                        </Card> */}
                        {courses.slice((selectedPage - 1) * pageSize, selectedPage * pageSize).map((c, i) =>
                            <CourseCard key={i} coursedata={c} id={i} />
                        )}
                        {courses.length ? <PaginationComponent
                            totalItems={courses.length}
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

export default Courses;
