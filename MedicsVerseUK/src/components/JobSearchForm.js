import React from "react";
// reactstrap components
import { Form, FormGroup, Input, Button } from "reactstrap";

function JobSearchForm(props) {

  return (
    <Form className={props.className+" job-search-form"} >
      <div className="form-row">
        <FormGroup className="col-md-5 col-sm-6 text-left">
          <label htmlFor="what">What</label>
          <Input id="what" placeholder="what" type="input"></Input>
        </FormGroup>
        <FormGroup className="col-md-4 col-sm-6 text-left">
          <label htmlFor="where">Where </label>
          <Input id="where" placeholder="where" type="input"></Input>
        </FormGroup>
        <FormGroup className="col-md-3 col-sm-12 text-left">
          <label className="hidden-label">_</label>
          <Button className="search-job-submit" id="searchjobs">Search Jobs</Button>
        </FormGroup>
        <FormGroup className="col-md-5 col-sm-0"></FormGroup>
        <FormGroup className="col-md-4 col-sm-12 text-right ">
          <a href="#" className="browse-jobs">
            Browse jobs&nbsp;
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </FormGroup>
      </div>
    </Form>
  );
}

export default JobSearchForm;
