import React from 'react'
import { useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ImageUploaded = () => {
    const { url } = useSelector(state => state.image)

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(url)
        toast.success('URL copied to the clipboard', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <span className="material-icons">check_circle</span>
                    <div className="card-title">Uploaded Successfully!</div>
                    <img className="uploaded" src={url} alt="" />
                    <div className="copytotheclipboard">
                        <input type="text" name="input" id="input" defaultValue={url} />
                        <button onClick={handleCopyToClipboard}>Copy Link</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
