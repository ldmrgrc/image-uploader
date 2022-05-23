import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPreview, startLoading, startUploadImage } from '../actions/imageAction'

export const ImageUploading = () => {
    const dispatch = useDispatch()
    const { url } = useSelector(state => state.image)
    const imageInputRef = useRef(null)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOnClick = () => {
        imageInputRef.current.click()
    }

    const handleOnChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)
            dispatch(createPreview(file))
        }
    }

    const handleOnDragOver = (e) => {
        e.preventDefault()
    }

    const handleOnDrop = (e) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (file) {
            setSelectedImage(file)
            dispatch(createPreview(file))
        }
    }

    const handleUploadImage = () => {
        dispatch(startLoading())
        dispatch(startUploadImage(selectedImage))
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Upload your image</div>
                    <div className="card-text">File should be Jpeg, Png,...</div>
                    <div className="card-image-container"
                        onClick={handleOnClick}
                        onDragOver={handleOnDragOver}
                        onDrop={handleOnDrop}
                    >
                        <input
                            id="uploadImage"
                            className="hide"
                            ref={imageInputRef}
                            type="file"
                            accept="image/jpeg, image/png"
                            name="uploadImage"
                            onChange={handleOnChange}
                            onDrag={handleOnChange}
                        />

                        {
                            url ? (
                                <img className="uploaded" src={url} alt="icon" />
                            ) : (
                                <>
                                    <img src='/assets/img/image.svg' alt="icon" />
                                    <div className="card-image-text">Drag &amp; Drop your image here</div>
                                </>
                            )
                        }
                    </div>
                    <span>Or</span>
                    <button onClick={url ? handleUploadImage : handleOnClick}>
                        {url ? 'Upload' : 'Choose a file'}
                    </button>
                </div>
            </div>
        </>
    )
}
