import { GET_FORUM_REQUEST, GET_FORUM_SUCCESS, GET_FORUM_FAILURE, ADD_FORUM_FILTER, CLEAR_FORUM_FILTER } from "redux/constants"

const initialState = {
    loading: false,
    categories: []
}

const getForumRequest = (state) => ({
    ...state,
    loading: true
})

const getForumSuccess = (state, payload) => ({
    ...state,
    loading: false,
    categories: payload
})

const getForumFailure = (state) => ({
    ...state,
    loading: false
})

const addForumFilter = (state, payload) => {
    const newState = {
        ...state,
        filters: {
            ...state.filters,
            ...payload
        }
    }
    return newState
}
const clearForumFilter = (state, payload) => {
    return {
        ...state,
        filters: payload
    }
}


const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORUM_REQUEST: return getForumRequest(state);
        case GET_FORUM_SUCCESS: return getForumSuccess(state, action.payload);
        case GET_FORUM_FAILURE: return getForumFailure(state);
        case ADD_FORUM_FILTER: return addForumFilter(state, action.payload);
        case CLEAR_FORUM_FILTER: return clearForumFilter(state, action.payload);
        default: return state;
    }
}
export default forumReducer