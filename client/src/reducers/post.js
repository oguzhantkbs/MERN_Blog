import * as types from '../actions/types'

const initialState = {
    posts: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FETCH_POSTS:
            return { ...state, ...payload }

        default:
            return {
                ...state
            }
    }
}
