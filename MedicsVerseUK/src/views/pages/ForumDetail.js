import React, {useState, useEffect} from "react";
import axios from "axios";

import * as Constants from "environment";

// core components
import Navbar from "components/Navbar.js";
import Thread from 'components/ThreadDetail';

import Footer from "components/Footer.js";
import { Col, Row, Container } from "reactstrap";


// sections for this page

function ThreadDetail(props) {
  let threadid = props.match.params.threadid;

  const [thread, setThread] = useState([],"Set the Thread");
  const [replies, setReplies] = useState([],"Set the Replies")
  const [loadingThread, setThreadLoading] = useState(true, "is Loaded");
  const [loadingReply, setReplyLoading] = useState(true, "is Loaded");

  useEffect(() => {
    // send HTTP request
    let access_token = localStorage.getItem('access_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
    axios.get(Constants.server_url+"thread/"+threadid)
    .then(res => { setThread(res.data.data); setThreadLoading(false) })
    .catch(err => { setThread({}); setThreadLoading(false)})

      // save response to variable
  }, []);
  useEffect(() => {
    // send HTTP request
    let access_token = localStorage.getItem('access_token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
    axios.get(Constants.server_url+"thread/replies/"+threadid)
    .then(res => { setReplies(res.data.data); setReplyLoading(false) })
    .catch(err => { setThread({}); setReplyLoading(false)})
      // save response to variable
  }, []);

  return (
    <div className="">
      <Navbar />
      <Container style={{marginTop: "40px"}}>
        <Row>
          {
            loadingThread && loadingReply ? "Loading...":
              <Thread thread={thread} replies={replies} />
          }
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ThreadDetail;
