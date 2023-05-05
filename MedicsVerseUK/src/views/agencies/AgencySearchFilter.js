import { Col, Row, FormGroup, Button, Input, Label } from "reactstrap";
function AgencySearchFilter(props) {
    return (
        <div className={props.className + " search-filter"}>

            <div className="filter-list">
                <div className="title-2">Find the best by</div>
                <div className="filter-jobType">
                    <div>Industry (required)</div>
                    <select className="form-select form-select-sm">
                        <option>select Industry</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="filter-jobType">
                    <div>Industry Sub Sector</div>
                    <select className="form-select form-select-sm">
                        <option>select subsector</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="filter-jobType">
                    <div>I'd like a recruitment agency to... (required)</div>
                    <select className="form-select form-select-sm">
                        <option>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="filter-jobType">
                    <div>Location</div>
                    <select className="form-select form-select-sm">
                        <option>select Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="filter-jobType">
                    <div>Employment Type</div>
                    <select className="form-select form-select-sm">
                        <option>select Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

        </div>
    )

}
export default AgencySearchFilter;
