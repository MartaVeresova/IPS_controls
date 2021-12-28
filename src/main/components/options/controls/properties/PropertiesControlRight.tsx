import React, {FC} from 'react';
import {EditableInput} from '../../commonComponents/inputTypes/EditableInput';
import {ReadOnlyInput} from '../../commonComponents/inputTypes/ReadOnlyInput';
import {MultiDropDown} from '../../commonComponents/inputTypes/MultiDropDown';
import {YesNoDropDown} from '../../commonComponents/inputTypes/YesNoDropDown';
import {SimpleDropDown} from '../../commonComponents/inputTypes/SimpleDropDown';
import {EnumDropDown} from '../../commonComponents/inputTypes/EnumDropDown';
import {OpenFileInput} from '../../commonComponents/inputTypes/OpenFileInput';
import style from './PropertiesControlRight.module.scss'
import {observer} from 'mobx-react-lite';
import {PropertyDataType} from '../../types/Types';
import {useStore} from '../../../hooks/useStore';


type PropsType = {
    field: PropertyDataType
    isImageFieldExpanded: boolean
    isSizeFieldExpanded: boolean
    previewImg: string
    setPreviewImg: (value: string) => void
}

export const PropertiesControlRight: FC<PropsType> = observer(props => {
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
                    <YesNoDropDown propertyValue={field.propertyValue}
                                   valueName={field.valueName}/>}

                {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown propertyValue={field.propertyValue}/>}

                {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDown propertyValue={field.propertyValue}
                                    valueName={field.valueName}/>}

                {field.fieldType === 'enumDropDown' &&
                    <EnumDropDown propertyValue={field.propertyValue}/>}
            </div>
        </>
    )
})
