import React, {FC, memo, SyntheticEvent, useState} from 'react';
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

    const onImageClick = () => {
        setIsImageFieldExpanded(!isImageFieldExpanded)
        setIsSizeFieldExpanded(false)
    }

    const onSizeClick = () => {
        setIsSizeFieldExpanded(!isSizeFieldExpanded)
    }

    const onInputSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        e.preventDefault()
    }

    return (
        <>
            <div key={field.propertyName} className={style.propertyDisplay}>
                <div className={style.propertyName}>

                    <input type="text" value={field.propertyName} onDoubleClick={onImageClick} onSelect={onInputSelect}
                           readOnly/>
                    {
                        field.propertyName === 'Изображение' && (field.propertyValue || previewImg !== '') &&
                        <>
                            <Pointer isFieldExpanded={isImageFieldExpanded} onIconClick={onImageClick}
                                     type="imageFieldIcon"/>
                            <div className={style.sizeField} hidden={!isImageFieldExpanded}>
                                <input type="text" value="Size" onDoubleClick={onSizeClick} readOnly/>
                                <Pointer isFieldExpanded={isSizeFieldExpanded} onIconClick={onSizeClick}
                                         type="sizeFieldIcon"/>

                                <div className={style.widthHeightFields} hidden={!isSizeFieldExpanded}>
                                    <input type="text" value="Width" readOnly/>
                                    <input type="text" value="Height" readOnly/>
                                </div>
                            </div>
                        </>
                    }

                </div>

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
                                   setPreviewImg={setPreviewImg}/>}

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