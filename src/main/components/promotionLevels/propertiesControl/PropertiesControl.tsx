import React, {FC, useCallback, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {observer} from 'mobx-react-lite';
import {BsChevronDown, BsChevronRight} from 'react-icons/all';
import {dataOfPropertiesTabType} from '../RightBlock';
import {ImageSizeProperty} from './nestedImageFields/ImageSizeProperty';
import {EditableInput} from '../../common/fieldTypes/EditableInput';
import {ReadOnlyInput} from '../../common/fieldTypes/ReadOnlyInput';
import {OpenFileInput} from '../../common/fieldTypes/OpenFileInput';
import {ImageSizeValue} from './nestedImageFields/ImageSizeValue';
import {MultiDropDown} from '../../common/fieldTypes/MultiDropDown';
import {SimpleDropDown} from '../../common/fieldTypes/SimpleDropDown';


type PropertiesControlType = {
    field: dataOfPropertiesTabType
}

export const PropertiesControl: FC<PropertiesControlType> = observer(({field}) => {

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState(false)


    const onIconClick = useCallback(() => {
        setIsImageFieldExpanded(!isImageFieldExpanded)
        setIsSizeFieldExpanded(false)
    }, [isImageFieldExpanded])

    const onImageSizePropertyClick = useCallback(() => {
        setIsSizeFieldExpanded(!isSizeFieldExpanded)
    }, [isSizeFieldExpanded])

    return (
        <>
            <div key={field.id} className={style.propertyDisplay}>
                <div className={style.propertyName}>
                    {field.hasNestedField && !isImageFieldExpanded &&
                    <BsChevronRight className={style.icon} onClick={onIconClick}/>}
                    {field.hasNestedField && isImageFieldExpanded &&
                    <BsChevronDown className={style.icon} onClick={onIconClick}/>}
                    <input type="text" value={field.propertyName} readOnly/>

                    {isImageFieldExpanded && field.hasNestedField &&
                    <ImageSizeProperty
                        isImageFieldExpanded={isImageFieldExpanded}
                        isSizeFieldExpanded={isSizeFieldExpanded}
                        onSizeFieldClick={onImageSizePropertyClick}
                        hasNestedField={field.hasNestedField}/>}
                </div>

                <div className={style.propertyValue}>
                    {field.fieldType === 'editableInput' && <EditableInput propertyValue={field.propertyValue}/>}
                    {field.fieldType === 'readOnlyInput' && <ReadOnlyInput propertyValue={field.propertyValue}/>}
                    {field.fieldType === 'openFileInput' && <OpenFileInput propertyValue={field.propertyValue}/>}
                    {field.fieldType === 'singleDropDown' && <SimpleDropDown/>}
                    {field.fieldType === 'multiDropDown' && <MultiDropDown/>}

                    {isImageFieldExpanded && field.hasNestedField &&
                    <ImageSizeValue
                        isSizeFieldExpanded={isSizeFieldExpanded}
                        hasNestedField={field.hasNestedField}/>}
                </div>
            </div>
        </>
    )
})