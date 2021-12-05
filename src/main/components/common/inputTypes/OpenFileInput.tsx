import React, {ChangeEvent, FC, memo, useEffect, useState} from 'react';
import style from './OpenFileInput.module.scss'

type PropsType = {
    propertyValue: string
    isImageFieldExpanded: boolean
    isSizeFieldExpanded: boolean
}

export const OpenFileInput: FC<PropsType> = memo((props) => {

    const {propertyValue, isImageFieldExpanded, isSizeFieldExpanded} = props

    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string>('')
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(propertyValue)
    // console.log(imagePreview)

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview('')
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const imageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        const files = event.target.files
        const reader = new FileReader()

        if (!files || !files.length) {
            setSelectedFile(null)
            return
        }
        setSelectedFile(files[0])

        if (reader !== undefined && files[0] !== undefined) {
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(files[0])
        }
        // console.log(event)
        // console.log(reader)
        // console.log(event)
    }

    const inputValue = () => {
        if (selectedFile || propertyValue) {
            return '(Значок)'
        }
        return '(отсутствует)'
    }


    return (
        <>
            <div className={style.inputField}>
                <img alt="" src={selectedFile ? preview : propertyValue}/>
                <input type="text" value={inputValue()} readOnly/>
                <input tabIndex={0} type="file" name="file" id="file" accept=".ico" onChange={imageUpload}/>
                <button>...</button>
            </div>

            <div className={style.openImageField} hidden={!isImageFieldExpanded}>
                <input type="text" value="16; 16" readOnly/>

                <div className={style.widthHeightValueFields} hidden={!isSizeFieldExpanded}>
                    <input type="text" value="16" readOnly/>
                    <input type="text" value="16" readOnly/>
                </div>
            </div>
        </>
    )
})


// useEffect(() => {
//     let elem = document.getElementsByTagName('img')
//     console.log(elem)
//     let theCSSprop = window.getComputedStyle(elem[0]).width;
//     console.log((parseInt(theCSSprop)).toString())
//     // @ts-ignore
//     document.getElementById('output').innerHTML = (parseInt(theCSSprop)).toString();
// }, [])


// const onChange = (e: any) => {
//     const files = e.target.files
//     console.log("file", files[0]);
//     let file = files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = _handleReaderLoaded
//         reader.readAsBinaryString(file)
//     }
// }

// const onFileSubmit = (e: any) => {
//     setIsLoading(true);
//     e.preventDefault()
//     console.log('bine', base64)
//     let payload = {image: base64}
//     console.log('payload', payload)
//
//     setTimeout(() => {
//         setIsLoading(false)
//     }, 2000)
// }