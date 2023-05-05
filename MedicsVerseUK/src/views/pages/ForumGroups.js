
import axios from "axios";
import React, { useState, useEffect } from 'react' 

// constants
import * as Constants from "environment";

// core components

import Navbar from "components/Navbar.js";
import Groups from 'views/forum/Groups.js';

import Footer from "components/Footer.js";
import { Col, Row, Container } from "reactstrap";

import { useDispatch, connect, useSelector } from "react-redux";
import { getForumRequest } from 'redux/action/forum';

function ForumGroups(props) {
  const [groups, setGroups] = useState("Set the Groups");
  const [loading, setLoading] = useState(true, "is Loaded");
  // const loading = useSelector(state => state.forum.loading);  
  useEffect(() => {
    // send HTTP request

    axios.get(Constants.server_url+"groups")
    .then(res => { setGroups(res.data.data); setLoading(false) })
    .catch(err => { setGroups({}); setLoading(false)})
      // save response to variable
  }, [])
  return (
    <div className="">
      <Navbar />
      <Container style={{marginTop: "40px"}}>
        <Row>
          <Col md={12}>
            {loading ? "Loading..." : 
              <Groups groups={groups}/>
            }
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ForumGroups;
