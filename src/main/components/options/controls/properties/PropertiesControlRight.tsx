import React, {FC, useEffect} from 'react';
import {EditableInput} from '../../commonComponents/inputTypes/EditableInput';
import {ReadOnlyInput} from '../../commonComponents/inputTypes/ReadOnlyInput';
import {MultiDropDown} from '../../commonComponents/inputTypes/MultiDropDown';
import {YesNoDropDown} from '../../commonComponents/inputTypes/YesNoDropDown';
import {SimpleDropDown} from '../../commonComponents/inputTypes/SimpleDropDown';
import {EnumDropDown} from '../../commonComponents/inputTypes/EnumDropDown';
import {OpenFileInput} from '../../commonComponents/inputTypes/OpenFileInput';
import style from './PropertiesControlRight.module.scss';
import {observer} from 'mobx-react-lite';
import {PropertyDataType} from '../../types/Types';


type PropsType = {
    field: PropertyDataType
    isImageFieldExpanded: boolean
    isSizeFieldExpanded: boolean
    previewImg: string
    setPreviewImg: (value: string) => void
    setSimpleDropDownSelectedItem: (id: number | null, fieldName: string) => void
    dropDownModel: any
}

export const PropertiesControlRight: FC<PropsType> = observer(props => {
    const {
        field,
        dropDownModel,
        isImageFieldExpanded,
        isSizeFieldExpanded,
        previewImg,
        setPreviewImg,
        setSimpleDropDownSelectedItem
    } = props

    useEffect(() => {
        if (field.fieldType === 'simpleDropDown') {
            dropDownModel.getSimpleDropDownSelectedItem(field.propertyValue, field.fieldName)
        }
    }, [dropDownModel, field])


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
                    <YesNoDropDown propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}/>}

                {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown propertyValue={field.propertyValue}/>}

                {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDown propertyValue={field.propertyValue}
                                    fieldName={field.fieldName}
                                    setSimpleDropDownSelectedItem={setSimpleDropDownSelectedItem}
                                    dropDownModel={dropDownModel}/>}

                {field.fieldType === 'enumDropDown' &&
                    <EnumDropDown propertyValue={field.propertyValue}
                                  fieldName={field.fieldName}
                                  dropDownModel={dropDownModel}/>}
            </div>
        </>
    )
})
