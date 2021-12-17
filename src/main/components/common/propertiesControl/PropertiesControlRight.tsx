import React, {FC, memo} from 'react';
import {EditableInput} from '../inputTypes/EditableInput';
import {ReadOnlyInput} from '../inputTypes/ReadOnlyInput';
import {MultiDropDown} from '../inputTypes/MultiDropDown';
import {YesNoDropDown} from '../inputTypes/YesNoDropDown';
import {SimpleDropDown} from '../inputTypes/SimpleDropDown';
import {EnumDropDown} from '../inputTypes/EnumDropDown';
import {OpenFileInput} from '../inputTypes/OpenFileInput';
import {PropertyDataType} from '../types/Types';
import style from './PropertiesControl.module.scss'


type PropsType = {
    field: PropertyDataType
    isImageFieldExpanded: boolean
    isSizeFieldExpanded: boolean
    previewImg: string
    setPreviewImg: (value: string) => void
}

export const PropertiesControlRight: FC<PropsType> = memo(props => {
    const {field, isImageFieldExpanded, isSizeFieldExpanded, previewImg, setPreviewImg} = props


    return (
        <>
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
        </>
    )
})
