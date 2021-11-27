import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import style from './OpenFileInput.module.scss'

type OpenFileInputType = {
    propertyValue: string
}

export const OpenFileInput: FC<OpenFileInputType> = ({propertyValue}) => {

    const [isFocused, setIsFocused] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>()
    const [preview, setPreview] = useState<string>('')

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
        setIsFocused(true)
    }
    const onBlurFocus = () => {
        setIsFocused(false)
    }
    const stopPropagation = () => {
        // e.stopImmediatePropagation()
    }
    const onTextInputChange = () => {

    }


    return (
        <>
            <div className={style.inputField}>
                {selectedFile && <img src={preview} alt="img"/>}
                <input type="text" value={propertyValue} onFocus={onInputFocus} onBlur={onBlurFocus} onChange={onTextInputChange}/>

                <input type="file" name="file" id="file" accept=".ico" onClick={stopPropagation}
                       onChange={onSelectFile}/>
                <button>...</button>

            </div>
        </>
    )
}