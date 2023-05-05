import { Col, Row, FormGroup, Button, Input, Label } from "reactstrap";

import * as Constants from "environment";


import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJobFilter, clearJobFilter, getJobRequest } from "redux/action/job";
import { useEffect, useState } from "react";
import axios from "axios";
import { removeValueFromArray } from "utils/helpers";
import { MultiSelect } from "react-multi-select-component";

function JobSearchFilter(props) {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.job.filters)
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const options = [
        { label: "London", value: "London" },
        { label: "Manchester", value: "Manchester" },
        { label: "Liverpool", value: "Liverpool" },
    ];
    useEffect(() => {
        // let access_token = localStorage.getItem('access_token');
        // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
        axios.get(Constants.server_url+"jobs")
            .then(res => { setCategories(res.data) })
            .catch(err => { })
    }, [])


    const handleKeyDown = (field) => (event) => {
        if (event.target.validity.valid) {
            dispatch(addJobFilter({ [field]: event.target.value }))
            dispatch(getJobRequest())
        }
    };
    const handleCheckbox = (cat_id) => (evt) => {
        let categorie_ids = filters.hasOwnProperty("categorie_ids") ? filters.categorie_ids : []
        if (evt.target.checked) {
            categorie_ids.push(cat_id)
            dispatch(addJobFilter({ "categorie_ids": categorie_ids }))
            dispatch(getJobRequest())
        }
        else dispatch(addJobFilter({ 'categorie_ids': removeValueFromArray(categorie_ids, cat_id) }))
    }
    const handleClear = () => {
        dispatch(clearJobFilter({
            "salary_start": "",
            "salary_end": "",
            "location": [],
            "agency_ids": [],
            "categorie_ids": []
        }))
        dispatch(getJobRequest())
    }
    const handleSelectLocation = (selected) => {
        console.log(selected)
        dispatch(addJobFilter({
            'location': selected
        }))
        dispatch(getJobRequest())
    }

    return (
        <div className={props.className + " search-filter"}>
            <div className="applied-filters">
                <div className="clear-all">
                    <span>Applied filters</span>&nbsp;
                    <a style={{ cursor: "pointer" }} onClick={handleClear}>clear all</a>
                </div>
                <div className="filter-btn-group">
                    {filters.salary_start ? <Button outline>{"> " + filters.salary_start + " £"}</Button> : ""}
                    {filters.salary_end ? <Button outline>{"< " + filters.salary_end + " £"}</Button> : ""}
                    {filters.location ?
                        filters.location.map((c, i) => <Button outline key={i}>{c.label}</Button>)
                        : ""
                    }
                    {filters.hasOwnProperty('categorie_ids') ? filters.categorie_ids.map((c, i) =>
                        <Button outline key={i}>{categories.filter(e => e.id == c)[0]['cat_name']}</Button>
                    ) : ''}
                </div>
            </div>
            <div className="filter-list">
                <div className="title-2">Filter your search</div>
                <div className="filter-salaryRange">
                    <div className="title-3">Salary range</div>
                    <label htmlFor="salary-from" className="title-4">From</label>
                    <Input pattern="[0-9]*" id="salary-from" placeholder="£ From" onChange={handleKeyDown('salary_start')} value={filters.salary_start} />
                    <label htmlFor="salary-to" className="title-4">To</label>
                    <Input pattern="[0-9]*" id="salary-to" placeholder="£ To" onChange={handleKeyDown('salary_end')} value={filters.salary_end}/>
                </div>
                <div className="filter-jobType">
                    <div className="title-3">Job Type</div>
                    {categories.map((c, i) =>
                        <FormGroup check key={c.id}>
                            <Label check className="title-4">
                                <Input type="checkbox" checked={filters.hasOwnProperty("categorie_ids") ? filters.categorie_ids.includes(c.id) : false} onChange={handleCheckbox(c.id)}></Input>
                                <span className="form-check-sign"></span>
                                {c.cat_name}
                            </Label>
                        </FormGroup>
                    )}
                </div>
                <div className="filter-jobType">
                    <div>Location</div>
                    <MultiSelect
                        options={locations.map(c => ({ "label": c.location, 'value': c.location }))}
                        value={filters.location}
                        onChange={handleSelectLocation}
                        labelledBy="Select Location"
                    />
                </div>
            </div>
        </div>
    )
}
export default JobSearchFilter;
