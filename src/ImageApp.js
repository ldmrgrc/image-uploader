import React from 'react'
import { useSelector } from 'react-redux'

import { ImageLoading } from './components/ImageLoading'
import { ImageUploaded } from './components/ImageUploaded'
import { ImageUploading } from './components/ImageUploading'

export const ImageApp = () => {
    const { status } = useSelector(state => state.image)

    return (
        <div className='center'>
            {status === 'loading' && <ImageLoading />}
            {status === 'idle' && <ImageUploading />}
            {status === 'uploaded' && <ImageUploaded />}

            <span className="created"
            >Created by <strong>Aldemar Garcia</strong> - devChallenges.io
            </span>
        </div>
    )
}
