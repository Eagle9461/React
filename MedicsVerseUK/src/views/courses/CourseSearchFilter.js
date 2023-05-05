import { Col, Row, FormGroup, Button, Input, Label } from "reactstrap";
function CourseSearchFilter(props) {
    return (
        <div className={props.className + " search-filter"}>

            <div className="filter-list">
                <div className="title-2">Filter by</div>
                <div className="filter-jobType">
                    <div className="title-3">Method of study</div>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Static	Security
                        </Label>
                    </FormGroup>
                    <FormGroup check className="title-4">
                        <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Retail	security
                        </Label>
                    </FormGroup>
                    <FormGroup check className="title-4">
                        <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Corporate	Security
                        </Label>
                    </FormGroup>
                    <FormGroup check className="title-4">
                        <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Event	Security
                        </Label>
                    </FormGroup>
                </div>
                <div className="filter-jobType">
                    <div className="title-3">Price</div>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Free
                        </Label>
                    </FormGroup>
                    <FormGroup check className="title-4">
                        <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            £10-50
                        </Label>
                    </FormGroup>
                    <FormGroup check className="title-4">
                        <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            £50-100
                        </Label>
                    </FormGroup>
                    <FormGroup check className="title-4">
                        <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            £100-250
                        </Label>
                    </FormGroup>
                    <FormGroup check className="title-4">
                        <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Discount courses
                        </Label>
                    </FormGroup>
                </div>
                <div className="filter-jobType">
                    <div className="title-3">Qualification type</div>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            CPD
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Professional certification
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Regulated qualification
                        </Label>
                    </FormGroup>
                </div>
                <div className="filter-jobType">
                    <div className="title-3">Course features</div>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Buy online
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Tutor Support
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Finance Available
                        </Label>
                    </FormGroup>
                </div>
                <div className="filter-jobType">
                    <div className="title-3">Course level</div>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Beginner
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Intermediate
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check className="title-4">
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            Advanced
                        </Label>
                    </FormGroup>
                </div>
            </div>
        </div>
    )

}
export default CourseSearchFilter;
