import { GET_JOB_REQUEST, GET_JOB_SUCCESS, GET_JOB_FAILURE, ADD_JOB_FILTER, CLEAR_JOB_FILTER } from "../constants.js"

export const getJobRequest = (payload) => ({
    type: GET_JOB_REQUEST,
    payload
});

export const getJobSuccess = (data) => ({
    type: GET_JOB_SUCCESS,
    payload: data,
});

export const getJobFailure = () => ({
    type: GET_JOB_FAILURE,
});

export const addJobFilter = (data) => ({
    type: ADD_JOB_FILTER,
    payload: data
});

export const clearJobFilter = (initial_filters) => ({
    type: CLEAR_JOB_FILTER,
    payload: initial_filters
});
