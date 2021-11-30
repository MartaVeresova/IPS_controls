import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import style from './OpenFileInput.module.scss'

type OpenFileInputType = {
    propertyValue: string
}

export const OpenFileInput: FC<OpenFileInputType> = ({propertyValue}) => {

    const [isInputFocused, setIsInputFocused] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>()
    const [preview, setPreview] = useState<string>('')

    // useEffect(() => {
    //     let elem = document.getElementsByTagName('img')
    //     console.log(elem)
    //     let theCSSprop = window.getComputedStyle(elem[0]).width;
    //     console.log((parseInt(theCSSprop)).toString())
    //     // @ts-ignore
    //     document.getElementById('output').innerHTML = (parseInt(theCSSprop)).toString();
    // }, [])

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


    const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files.length) {
            setSelectedFile(null)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    const onInputFocus = () => {
        setIsInputFocused(true)
    }
    const onInputBlur = () => {
        setIsInputFocused(false)
    }
    const stopPropagation = () => {
        // e.stopImmediatePropagation()
    }

    return (
        <>
            <div className={style.inputField}>
                <img alt="img" className={style.image} src={selectedFile ? preview : propertyValue}/>
                <input type="text" value="(Значок)" onFocus={onInputFocus} onBlur={onInputBlur} readOnly/>
                <input type="file" name="file" id="file" accept=".ico" onClick={stopPropagation} onChange={onSelectFile}/>
                <button>...</button>
            </div>
        </>
    )
}