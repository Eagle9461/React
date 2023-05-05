import { GET_JOB_REQUEST, GET_JOB_SUCCESS, GET_JOB_FAILURE, ADD_JOB_FILTER, CLEAR_JOB_FILTER } from "redux/constants"

const initialState = {
    loading: false,
    jobs: [],
    filters: {
        "salary_start": "",
        "salary_end": "",
        "location": [],
        "agency_ids": [],
        "categorie_ids": []
    }
}

const getJobRequest = (state) => ({
    ...state,
    loading: true
})

const getJobSuccess = (state, payload) => ({
    ...state,
    loading: false,
    jobs: payload
})

const getJobFailure = (state) => ({
    ...state,
    loading: false
})

const addJobFilter = (state, payload) => {
    const newState = {
        ...state,
        filters: {
            ...state.filters,
            ...payload
        }
    }
    return newState
}
const clearJobFilter = (state, payload) => {
    return {
        ...state,
        filters: payload
    }
}


const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOB_REQUEST: return getJobRequest(state);
        case GET_JOB_SUCCESS: return getJobSuccess(state, action.payload);
        case GET_JOB_FAILURE: return getJobFailure(state);
        case ADD_JOB_FILTER: return addJobFilter(state, action.payload);
        case CLEAR_JOB_FILTER: return clearJobFilter(state, action.payload);
        default: return state;
    }
}
export default jobReducer