import React, {FC, memo, useState} from 'react';
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


    return (
        <>
            <div key={field.propertyName} className={style.propertyDisplay}>
                <div className={style.propertyName}>

                    {
                        field.propertyName === 'Изображение' && (field.propertyValue || previewImg !== '') &&

                            // <Pointer onImageClick={onImageClick}
                            //          isImageFieldExpanded={isImageFieldExpanded}/>

                        <div tabIndex={0} className={style.icon} onClick={onImageClick}>
                            {`${isImageFieldExpanded ? '﹥' : '⌵'}`}
                        </div>
                    }


                    <input type="text" value={field.propertyName} readOnly/>

                    <div className={style.sizeField} hidden={!isImageFieldExpanded}>
                        {field.propertyName === 'Изображение' && (field.propertyValue || previewImg !== '') &&
                        <div tabIndex={0} className={style.icon} onClick={onSizeClick}>⌵</div>}
                        <input type="text" value="Size" readOnly/>

                        <div className={style.widthHeightFields} hidden={!isSizeFieldExpanded}>
                            <input type="text" value="Width" readOnly/>
                            <input type="text" value="Height" readOnly/>
                        </div>
                    </div>
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