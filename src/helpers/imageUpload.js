
export const imageUpload = async (file) => {
    const cloudUrl = process.env.REACT_APP_CLOUDINARY_URL_2;

    const formData = new FormData();
    formData.append("upload_preset", "ml_default");
    formData.append("file", file);

    try {
        const res = await fetch(cloudUrl, {
            method: "POST",
            body: formData,
        });

        if (res.status === 200) {
            const data = await res.json();
            return data.secure_url;
        } else {
            console.log(res.status);
        }

    } catch (error) {
        throw error;
    }

};
