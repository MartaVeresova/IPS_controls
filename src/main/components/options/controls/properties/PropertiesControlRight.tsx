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
import {DataType} from '../../types/Types';


type PropsType = {
    field: DataType
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: any
}

export const PropertiesControlRight: FC<PropsType> = observer(props => {
    const {field, setSelectedItem, additionalModel} = props

    useEffect(() => {
        if (field.fieldType === 'simpleDropDown') {
            additionalModel.getSimpleDropDownSelectedItem(field.propertyValue, field.fieldName)
        }
    }, [additionalModel, field])

    return (
        <>
            <div className={style.propertyValue}>
                {field.fieldType === 'editableInput' &&
                    <EditableInput propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}
                                   additionalModel={additionalModel}/>}

                {field.fieldType === 'readOnlyInput' &&
                    <ReadOnlyInput propertyValue={field.propertyValue}/>}

                {field.fieldType === 'openFileInput' &&
                    <OpenFileInput propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}
                                   additionalModel={additionalModel}/>}

                {field.fieldType === 'yesNoDropDown' &&
                    <YesNoDropDown propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}
                                   additionalModel={additionalModel}/>}

                {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown propertyValue={field.propertyValue}
                                   fieldName={field.fieldName}
                                   setSelectedItem={setSelectedItem}
                                   additionalModel={additionalModel}/>}

                {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDown propertyValue={field.propertyValue}
                                    fieldName={field.fieldName}
                                    setSelectedItem={setSelectedItem}
                                    additionalModel={additionalModel}/>}

                {field.fieldType === 'enumDropDown' &&
                    <EnumDropDown propertyValue={field.propertyValue}
                                  fieldName={field.fieldName}
                                  setSelectedItem={setSelectedItem}
                                  additionalModel={additionalModel}/>}
            </div>
        </>
    )
})
