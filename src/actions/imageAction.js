import { types } from "../types/types";
import { imageUpload } from "../helpers/imageUpload";

export const startLoading = () => {
    return {
        type: types.LOADING_IMAGE,
    };
}

export const uploadImage = (url) => {
    return {
        type: types.UPLOAD_IMAGE,
        payload: url,
    };
}

export const startUploadImage = (file) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const url = await imageUpload(file)

        if (url) {
            dispatch(uploadImage(url));
        } else {
            console.log('error')
        }
    }
}

export const startCreatingPreview = (url) => {
    return {
        type: types.CREATING_PREVIEW,
        payload: url,
        
    };
}

export const createPreview = (file) => {
    return (dispatch) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            dispatch(startCreatingPreview(e.target.result));
        }
        reader.readAsDataURL(file);
    }
}