import React, {createRef, FC, memo, useEffect, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {EditableInput} from '../inputTypes/EditableInput';
import {ReadOnlyInput} from '../inputTypes/ReadOnlyInput';
import {MultiDropDown} from '../inputTypes/MultiDropDown';
import {YesNoDropDown} from '../inputTypes/YesNoDropDown';
import {PropertyDataType} from '../types/Types';
import {SimpleDropDown} from '../inputTypes/SimpleDropDown';
import {EnumDropDown} from '../inputTypes/EnumDropDown';
import {OpenFileInput} from '../inputTypes/OpenFileInput';
import {Pointer} from '../Pointer';


type PropsType = {
    field: PropertyDataType
}

export const PropertiesControl: FC<PropsType> = memo(({field}) => {

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState<boolean>(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState<boolean>(false)
    const [previewImg, setPreviewImg] = useState<string>('')
    const [sizeWidth, setSizeWidth] = useState<string | number>('')
    const [sizeHeight, setSizeHeight] = useState<string | number>('')
    const imgRef = createRef<HTMLImageElement>()

    useEffect(() => {
        if (imgRef.current) {
            setSizeWidth(imgRef.current.naturalWidth)
            setSizeHeight(imgRef.current.naturalHeight)
        }
    }, [imgRef])

    const onImageClick = () => {
        if (field.propertyName === 'Изображение') {
            setIsImageFieldExpanded(!isImageFieldExpanded)
            setIsSizeFieldExpanded(false)
        }
    }

    const onSizeClick = () => {
        setIsSizeFieldExpanded(!isSizeFieldExpanded)
    }


    return (
        <>
            <div className={style.propertyDisplay}>

                {field.propertyName === 'Изображение'
                    ?
                    <div className={style.propertyNameImage}>
                        <div className={style.nameField} tabIndex={0} onDoubleClick={onImageClick}>
                            <Pointer isFieldExpanded={isImageFieldExpanded} onIconClick={onImageClick}
                                     type="imageFieldIcon"/>
                            {field.propertyName}

                        </div>

                        <div>
                            <div className={style.sizeField} tabIndex={0} onDoubleClick={onSizeClick}>
                                <Pointer isFieldExpanded={isSizeFieldExpanded} onIconClick={onSizeClick}
                                         type="sizeFieldIcon"/>
                                Size
                            </div>
                            <div  className={style.widthHeightFields}>
                                <div tabIndex={0}>Width</div>
                                <div tabIndex={0}>Height</div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={style.propertyName}>
                        <div tabIndex={0} onDoubleClick={onImageClick}>
                            {field.propertyName}
                        </div>
                    </div>

                }


                {/*<div className={style.nestedItems}>*/}
                {/*    {*/}
                {/*        field.propertyName === 'Изображение' &&*/}
                {/*        isImageFieldExpanded &&*/}

                {/*        <div className={style.sizeField} tabIndex={0} onDoubleClick={onSizeClick}>*/}
                {/*            <Pointer isFieldExpanded={isSizeFieldExpanded} onIconClick={onSizeClick}*/}
                {/*                     type="sizeFieldIcon"/>*/}
                {/*            Size*/}
                {/*        </div>*/}
                {/*    }*/}
                {/*    {*/}
                {/*        field.propertyName === 'Изображение' &&*/}
                {/*        isSizeFieldExpanded &&*/}

                {/*        <div>*/}
                {/*            <div className={style.widthHeightFields} tabIndex={0}>Width</div>*/}
                {/*            <div className={style.widthHeightFields} tabIndex={0}>Height</div>*/}
                {/*        </div>*/}
                {/*    }*/}
                {/*</div>*/}


                <div className={style.propertyValue}>
                    {field.fieldType === 'editableInput' &&
                    <EditableInput propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'readOnlyInput' &&
                    <ReadOnlyInput propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'openFileInput' &&
                    <OpenFileInput propertyValue={field.propertyValue}
                                   isImageFieldExpanded={isImageFieldExpanded}
                                   isSizeFieldExpanded={isSizeFieldExpanded}
                                   previewImg={previewImg}
                                   setPreviewImg={setPreviewImg}
                                   imgRef={imgRef}/>}

                    {field.fieldType === 'yesNoDropDown' &&
                    <YesNoDropDown propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDown propertyValue={field.propertyValue}
                                    propertyName={field.propertyName}/>}

                    {field.fieldType === 'enumDropDown' &&
                    <EnumDropDown propertyValue={field.propertyValue}/>}
                </div>
            </div>
        </>
    )
})