

export const fileUpload = async(file) => {

    if(!file) throw new Error ('No tenemos archivos')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dgstz5q0v/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'journal-react')
    formData.append('file', file)

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })
        
        if(!resp.ok) throw new Error('no se pudo subir imagen')
        const cloudResp = await resp.json()
        return cloudResp.secure_url
        
    } catch (error) {
        console.log(error)
        throw new Error(error.messaje)
    }
}
