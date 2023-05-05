import React, { useEffect, useState } from "react";
import axios from "axios";
// core components
import Navbar from "components/Navbar.js";
import JobSearchForm from "components/JobSearchForm.js";
import AgencySearchFilter from 'views/agencies/AgencySearchFilter.js'
import AgencyCard from "views/agencies/AgencyCard";

import Footer from "components/Footer.js";
import { Col, Row, Container, Button, Card, CardBody, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";
import PaginationComponent from "react-reactstrap-pagination";


// sections for this page


function Agencies() {
    const [agencies, setAgencies] = useState([]);
    const [selectedPage, setSelectedPage] = useState(1)
    const pageSize = 4
    useEffect(() => {
        axios.get("http://52.91.178.77/api.php?type=all_agencies")
            .then(res => { setAgencies(res.data) })
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
                        <AgencySearchFilter />
                    </Col>
                    <Col md={8}>
                        {agencies.slice((selectedPage - 1) * pageSize, selectedPage * pageSize).map((c, i) =>
                            <AgencyCard key={i} agencydata={c} id={i} />
                        )}
                        {agencies.length ? <PaginationComponent
                            totalItems={agencies.length}
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

export default Agencies;
