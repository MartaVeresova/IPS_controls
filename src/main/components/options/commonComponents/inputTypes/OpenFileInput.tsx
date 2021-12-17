import React, {ChangeEvent, createRef, FC, memo, useEffect, useRef, useState} from 'react';
import style from './OpenFileInput.module.scss'

type PropsType = {
    propertyValue: string
    isImageFieldExpanded: boolean
    isSizeFieldExpanded: boolean
    previewImg: string
    setPreviewImg: (value: string) => void
    // imgRef: any
}


export const OpenFileInput: FC<PropsType> = memo((props) => {
    const {propertyValue, isImageFieldExpanded, isSizeFieldExpanded, previewImg, setPreviewImg} = props

    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    // const [previewImg, setPreviewImg] = useState<string>('')
    const [sizeWidth, setSizeWidth] = useState<string | number>('')
    const [sizeHeight, setSizeHeight] = useState<string | number>('')

    const inputRef = useRef<HTMLInputElement | null>(null)
    const imgRef = createRef<HTMLImageElement>()


    useEffect(() => {
        if (imgRef.current) {
            setSizeWidth(imgRef.current.naturalWidth)
            setSizeHeight(imgRef.current.naturalHeight)
        }
    }, [imgRef])

    useEffect(() => {
        // const encodedData
        window.btoa(previewImg)
    }, [previewImg])


    const imageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        const newFile = event.target.files && event.target.files[0]

        if (inputRef.current) {
            const fileName = inputRef.current.value
            const index = fileName.lastIndexOf('.') + 1;
            const extFile = fileName.substring(index, fileName.length).toLowerCase();
            if (extFile === 'ico') {
                if (newFile) {
                    setSelectedFile(newFile)
                    setPreviewImg(window.URL.createObjectURL(newFile))

                    if (reader !== undefined) {
                        reader.onload = () => {
                            setPreviewImg(reader.result as string)
                        }
                        reader.readAsDataURL(newFile)
                    }
                }
            } else console.log('ONLY \'.ico\' FILES ARE ALLOWED!!!')
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
            <div className={style.block} tabIndex={0}>
                <div className={style.container}>
                    <div className={style.inputField}>
                        <img alt="" src={selectedFile ? previewImg : propertyValue} ref={imgRef}/>
                        <div>{inputTextValue()}</div>
                    </div>
                    <input type="file" name="file" id="file" ref={inputRef} accept=".ico"
                           onChange={imageUpload}/>
                    <button onClick={onButtonClick} tabIndex={0}>...</button>
                </div>
            </div>
            <div className={style.additionalField} hidden={!isImageFieldExpanded}>
                <div className={style.openImageField} tabIndex={0}>
                    {`${sizeWidth}x${sizeHeight}`}
                </div>
                <div className={style.widthHeightFields} hidden={!isSizeFieldExpanded}>
                    <div tabIndex={0}>{sizeWidth}</div>
                    <div tabIndex={0}>{sizeHeight}</div>
                </div>
            </div>
        </>
    )
})