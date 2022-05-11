import * as type from '../actions/types'

const initialState = {
    posts: [],
    currentPost: null
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case type.FETCH_POSTS:
            // console.log("FETCH_POSTS reducer")

            return {
                ...state,
                posts: action.payload
            }

        case type.FETCH_SINGLE_POST:
            // console.log("FETCH_POSTS reducer")
            return {
                ...state,
                currentPost: action.payload
            }

        case type.CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        default:
            // console.log("Default reducer")

            return {
                ...state
            }
    }
}
export default postReducer
