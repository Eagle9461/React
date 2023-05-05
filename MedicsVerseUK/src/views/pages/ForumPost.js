import React,{useState, useEffect} from "react";
import axios from "axios";

import * as Constants from "environment";

import Navbar from "components/Navbar.js";

import Footer from "components/Footer.js";
import { Col, Row, Container,Input, Button, Card, CardBody, CardTitle, CardFooter, CardHeader, Form } from "reactstrap";
import { useDispatch, connect, useSelector } from "react-redux";
import { getThreadsRequest } from "redux/action/forum";
// sections for this page

function Forum(props) {
  const [loading, setLoading] = useState(true, 'Set the loading..');
  const data = useSelector(state => state.forum.categories);
  const [groups, setGroups] = useState([], 'set the groups'); 
  const dispatch = useDispatch();
  useEffect(() => {
      // send HTTP request
      axios.get(Constants.server_url+"groups")
        .then(res => { setGroups(res.data.data.Items);  setLoading(false)})
        .catch(err => { setGroups({}); })
      // save response to variable
  }, [])
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    let data = new FormData();
    data.append("title", e.target.title.value);
    data.append("description", e.target.description.value);
    data.append("groupName", e.target.groupName.value);
    const requestOptions = {
        headers: { 'Authorization': "Bearer "+localStorage.getItem("access_token") },
        method: 'POST',
        body: data
    };
    fetch(Constants.server_url+"thread", requestOptions)
        .then(
            response => alert(response.status)
        ).catch(
            error => console.log(error)
        );
  }
  return (
    <div className="">
      <Navbar />      
      <Container style={{marginTop: "40px"}}>
        <Row>
          <Card style={{padding:"10px"}}>
            <Form method="post" onSubmit={onSubmit}>
              <CardHeader>
                <CardTitle>Creat a Forum</CardTitle>
              </CardHeader>
              <CardBody>
                <Input type="text" name="title" placeholder="title"/>
                <Input type="textarea" name="description" placeholder="description"/>
                <Input type="select" name="groupName" placeholder="">
                  {
                    loading ? "Loading..":
                      groups.map(group => <option>{group.name}</option>)
                  }
                </Input>
              </CardBody>
              <CardFooter>
                <Input type="submit"></Input>
              </CardFooter>
            </Form>
          </Card>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Forum;
