import React, {ChangeEvent, createRef, FC, useEffect, useRef} from 'react';
import style from './OpenFileInput.module.scss'
import {observer} from 'mobx-react-lite';


type PropsType = {
    propertyValue: string
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        isImageFieldExpanded: boolean
        isSizeFieldExpanded: boolean
        sizeWidth: number
        sizeHeight: number
        selectedFile: File | null
        setSelectedFile: (file: File) => void
        setSizeImage: (width: number, height: number) => void
        setIsImageFieldExpanded: (value: boolean) => void
        setIsSizeFieldExpanded: (value: boolean) => void
    }
}


export const OpenFileInput: FC<PropsType> = observer((props) => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    const inputRef = useRef<HTMLInputElement | null>(null)
    const imgRef = createRef<HTMLImageElement>()


    useEffect(() => {
        if (imgRef.current) {
            additionalModel.setSizeImage(imgRef.current.naturalWidth, imgRef.current.naturalHeight)
        }
    }, [additionalModel, imgRef])

    useEffect(() => {
        // const encodedData
        window.btoa(propertyValue)
        // console.log(window.btoa(propertyValue))
    }, [propertyValue])


    const imageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        const newFile = event.target.files && event.target.files[0]

        if (inputRef.current) {
            const fileName = inputRef.current.value
            const index = fileName.lastIndexOf('.') + 1;
            const extFile = fileName.substring(index, fileName.length).toLowerCase();
            if (extFile === 'ico') {
                if (newFile && reader !== undefined) {

                    // additionalModel.setSelectedFile(newFile)
                    reader.readAsDataURL(newFile)
                    reader.onload = () => {
                        console.log(window.btoa(reader.result as string))
                        setSelectedItem(reader.result as string, fieldName)
                    }
                }
            } else console.log('ONLY \'.ico\' FILES ARE ALLOWED!!!')
        }
    }

    const imageCaption = () => {
        if (additionalModel.selectedFile || propertyValue) {
            return '(????????????)'
        }
        return '(??????????????????????)'
    }

    const onButtonClick = () => {
        inputRef && inputRef.current && inputRef.current.click()
    }


    return (
        <>
            <div className={style.imageUploadField}>
                <div className={style.imageWithCaption}>
                    <img alt="" src={propertyValue} ref={imgRef}/>
                    <div>{imageCaption()}</div>
                </div>
                <input type="file" name="file" ref={inputRef} accept=".ico" onChange={imageUpload}/>
                <button className={style.loadFileButton} onClick={onButtonClick}>...</button>
            </div>

            <div className={style.additionalFields} hidden={!additionalModel.isImageFieldExpanded}>
                <div className={style.sizesField}>
                    {`${additionalModel.sizeWidth}x${additionalModel.sizeHeight}`}
                </div>
                <div className={style.widthHeightFields} hidden={!additionalModel.isSizeFieldExpanded}>
                    {additionalModel.sizeWidth}</div>
                <div className={style.widthHeightFields} hidden={!additionalModel.isSizeFieldExpanded}>
                    {additionalModel.sizeHeight}</div>
            </div>
        </>
    )
})