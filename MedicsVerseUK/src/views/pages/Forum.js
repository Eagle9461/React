import React,{useState, useEffect} from "react";

// core components
import Navbar from "components/Navbar.js";
import Threads from 'views/forum/Threads.js';

import Footer from "components/Footer.js";
import { Col, Row, Container, Button } from "reactstrap";
import { useDispatch, connect, useSelector } from "react-redux";
import { getThreadsRequest } from "redux/action/forum";
// sections for this page

function Forum(props) {

  return (
    <div className="">
      <Navbar />      
      <Container style={{marginTop: "40px"}}>
        <Row>
          {
              <Threads {...props}/>
          }
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Forum;
