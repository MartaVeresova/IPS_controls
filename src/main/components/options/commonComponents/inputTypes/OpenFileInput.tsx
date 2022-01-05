import React, {ChangeEvent, createRef, FC, useEffect, useRef} from 'react';
import style from './OpenFileInput.module.scss'
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: string
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        isImageFieldExpanded: boolean,
        isSizeFieldExpanded: boolean,
        sizeWidth: number,
        sizeHeight: number,
        selectedFile: File | null,
        setSelectedFile: (file: File) => void,
        setSizeImage: (width: number, height: number) => void,
        setIsImageFieldExpanded: (value: boolean) => void,
        setIsSizeFieldExpanded: (value: boolean) => void,
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
    }, [propertyValue])


    const imageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        const newFile = event.target.files && event.target.files[0]

        if (inputRef.current) {
            const fileName = inputRef.current.value
            const index = fileName.lastIndexOf('.') + 1;
            const extFile = fileName.substring(index, fileName.length).toLowerCase();
            if (extFile === 'ico') {
                if (newFile) {
                    additionalModel.setSelectedFile(newFile)
                    setSelectedItem(window.URL.createObjectURL(newFile), fieldName)

                    if (reader !== undefined) {
                        reader.onload = () => {
                            setSelectedItem(reader.result as string, fieldName)
                        }
                        reader.readAsDataURL(newFile)
                    }
                }
            } else console.log('ONLY \'.ico\' FILES ARE ALLOWED!!!')
        }
    }

    const inputTextValue = () => {
        if (additionalModel.selectedFile || propertyValue) {
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
                        <img alt="" src={propertyValue} ref={imgRef}/>
                        <div>{inputTextValue()}</div>
                    </div>
                    <input type="file" name="file" id="file" ref={inputRef} accept=".ico"
                           onChange={imageUpload}/>
                    <button onClick={onButtonClick} tabIndex={0}>...</button>
                </div>
            </div>
            <div className={style.additionalField} hidden={!additionalModel.isImageFieldExpanded}>
                <div className={style.openImageField} tabIndex={0}>
                    {`${additionalModel.sizeWidth}x${additionalModel.sizeHeight}`}
                </div>
                <div className={style.widthHeightFields} hidden={!additionalModel.isSizeFieldExpanded}>
                    <div tabIndex={0}>{additionalModel.sizeWidth}</div>
                    <div tabIndex={0}>{additionalModel.sizeHeight}</div>
                </div>
            </div>
        </>
    )
})