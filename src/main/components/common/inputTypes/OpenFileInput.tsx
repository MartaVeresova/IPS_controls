import React, {ChangeEvent, FC, memo, useEffect, useRef, useState} from 'react';
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
    const [imagePreview, setImagePreview] = useState<string | null>(propertyValue)
    // console.log(imagePreview)

    // const [fileData, setFileData] = useState({});

    const inputRef = useRef<HTMLInputElement>(null)

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview('')
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        if (inputRef.current) {
            const fileName = inputRef.current.value
            const index = fileName.lastIndexOf('.') + 1;
            const extFile = fileName.substring(index, fileName.length).toLowerCase();
            if (extFile === 'ico') {
                setPreview(objectUrl)
            } else {
                console.log('Only \'.ico\' files are allowed!')
            }
        }

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const imageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        const reader = new FileReader()
        // const formData = new FormData(); // for send to back

        const files = event.target.files

        if (!files || !files.length) {
            setSelectedFile(null)
            return
        }
        setSelectedFile(files[0])
        // formData.append('newFile', files[0], files[0].name);
        // setFileData(formData);

        if (reader !== undefined && files[0] !== undefined) {
            reader.onloadend = () => {
                if (reader.result) {
                    if (inputRef.current) {
                        const fileName = inputRef.current.value
                        const index = fileName.lastIndexOf('.') + 1;
                        const extFile = fileName.substring(index, fileName.length).toLowerCase();
                        if (extFile === 'ico') {
                            const encodedData = window.btoa((reader.result).toString())
                            setImagePreview(encodedData)
                        }
                    }
                }
            }
            reader.readAsDataURL(files[0])
        }
    }

    const inputTextValue = () => {
        if (selectedFile || propertyValue) {
            return '(Значок)'
        }
        return '(отсутствует)'
    }

    const onButtonClick = () => {
        inputRef && inputRef.current && inputRef.current.click()
    }

    return (
        <>
            <div className={style.inputField}>
                <img alt="" src={selectedFile ? preview : propertyValue}/>
                <input type="text" value={inputTextValue()} readOnly/>
                <input tabIndex={0} type="file" name="file" id="file" ref={inputRef} accept=".ico"
                       onChange={imageUpload}/>
                <button onClick={onButtonClick}>...</button>
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