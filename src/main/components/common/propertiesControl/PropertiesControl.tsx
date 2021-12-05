import React, {FC, memo, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {EditableInput} from '../inputTypes/EditableInput';
import {ReadOnlyInput} from '../inputTypes/ReadOnlyInput';
import {MultiDropDown} from '../inputTypes/MultiDropDown';
import {YesNoDropDown} from '../inputTypes/YesNoDropDown';
import {OpenFileInputExample} from '../inputTypes/OpenFileInputExample';
import {PropertyDataType} from '../types/Types';
import {SimpleDropDownContainer} from '../inputTypes/SimpleDropDownContainer';


type PropertiesControlType = {
    field: PropertyDataType
}

export const PropertiesControl: FC<PropertiesControlType> = memo(({field}) => {

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState<boolean>(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState<boolean>(true)

    const onImageClick = () => {
        setIsImageFieldExpanded(!isImageFieldExpanded)
        setIsSizeFieldExpanded(false)
    }

    const onSizeClick = () => setIsSizeFieldExpanded(!isSizeFieldExpanded)


    return (
        <>
            <div key={field.propertyName} className={style.propertyDisplay}>
                <div className={style.propertyName}>
                    {field.propertyName === 'Изображение' && field.propertyValue &&
                    <label tabIndex={0} onClick={onImageClick}>⌵</label>}
                    <input type="text" value={field.propertyName} readOnly/>

                    <div className={style.sizeField} hidden={!isImageFieldExpanded}>
                        {field.propertyName === 'Изображение' && field.propertyValue &&
                        <label tabIndex={0} onClick={onSizeClick}>⌵</label>}
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
                    <OpenFileInputExample propertyValue={field.propertyValue}
                                          isImageFieldExpanded={isImageFieldExpanded}
                                          isSizeFieldExpanded={isSizeFieldExpanded}/>}

                    {field.fieldType === 'yesNoDropDown' &&
                    <YesNoDropDown propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown/>}

                    {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDownContainer propertyValue={field.propertyValue}
                                             propertyName={field.propertyName}/>}

                </div>
            </div>
        </>
    )
})