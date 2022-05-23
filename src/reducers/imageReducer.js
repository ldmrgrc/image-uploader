import { types } from "../types/types";

const initialState = {
    url: '',
    status: 'idle',
}

export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_IMAGE:
            return {
                ...state,
                status: 'loading',
            };
        case types.UPLOAD_IMAGE:
            return {
                ...state,
                url: action.payload,
                status: 'uploaded',
            };
        case types.FINISH_LOADING:
            return {
                ...state,
                status: 'idle',
            };
        case types.CREATING_PREVIEW:
            return {
                ...state,
                url: action.payload,
            };
        default:
            return state;
    }
}