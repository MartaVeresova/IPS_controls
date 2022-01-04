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
import {DataType} from '../../../store/PropertyModel';


type PropsType = {
    field: DataType
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    dropDownModel: any
}

export const PropertiesControlRight: FC<PropsType> = observer(props => {
    const {field, setSelectedItem, dropDownModel} = props

    useEffect(() => {
        if (field.fieldType === 'simpleDropDown') {
            dropDownModel.getSimpleDropDownSelectedItem(field.propertyValue, field.fieldName)
        }
        if (field.fieldType === 'multiDropDown') {
            dropDownModel.getMultiDropDownSelectedItem(field.propertyValue)
        }
    }, [dropDownModel, field])


    return (
        <>
            <div className={style.propertyValue}>
                {field.fieldType === 'editableInput' &&
                    <EditableInput propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}/>}

                {field.fieldType === 'readOnlyInput' &&
                    <ReadOnlyInput propertyValue={field.propertyValue}/>}

                {field.fieldType === 'openFileInput' &&
                    <OpenFileInput propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}
                                   dropDownModel={dropDownModel}/>}

                {field.fieldType === 'yesNoDropDown' &&
                    <YesNoDropDown propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}
                                   dropDownModel={dropDownModel}/>}

                {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}
                                   dropDownModel={dropDownModel}/>}

                {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDown propertyValue={field.propertyValue}
                                    fieldName={field.fieldName}
                                    setSelectedItem={setSelectedItem}
                                    dropDownModel={dropDownModel}/>}

                {field.fieldType === 'enumDropDown' &&
                    <EnumDropDown propertyValue={field.propertyValue}
                                  fieldName={field.fieldName}
                                  setSelectedItem={setSelectedItem}
                                  dropDownModel={dropDownModel}/>}
            </div>
        </>
    )
})
