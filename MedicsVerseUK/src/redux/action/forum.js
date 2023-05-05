import { GET_FORUM_REQUEST, GET_FORUM_SUCCESS, GET_FORUM_FAILURE, ADD_FORUM_FILTER, CLEAR_FORUM_FILTER, 
    GET_THREADS_REQUEST, GET_THREADS_SUCCESS, GET_THREADS_FAILURE } 
    from "../constants.js"

export const getForumRequest = () => ({
    type: GET_FORUM_REQUEST
});

export const getForumSuccess = (data) => ({
    type: GET_FORUM_SUCCESS,
    payload: data,
});

export const getForumFailure = () => ({
    type: GET_FORUM_FAILURE,
});

export const addForumFilter = (data) => ({
    type: ADD_FORUM_FILTER,
    payload: data
});

export const clearForumFilter = (initial_filters) => ({
    type: CLEAR_FORUM_FILTER,
    payload: initial_filters
});

export const getThreadsRequest = (cid) => ({
    type: GET_THREADS_REQUEST,
    categoryID: cid
});
export const getThreadsSuccess = (data) => ({
    type: GET_THREADS_SUCCESS,
    threads: data
});
export const getThreadsFailure = () => ({
    type: GET_THREADS_FAILURE
});
