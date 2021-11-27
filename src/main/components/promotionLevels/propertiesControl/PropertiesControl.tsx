import React, {FC, useCallback, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {observer} from 'mobx-react-lite';
import {BsChevronDown, BsChevronRight} from 'react-icons/all';
import {dataOfPropertiesTabType} from '../TabControl';
import {NameNestedImageFields} from './nestedImageFields/NameNestedImageFields';
import {EditableInput} from '../../common/fieldTypes/EditableInput';
import {ReadOnlyInput} from '../../common/fieldTypes/ReadOnlyInput';
import {OpenFileInput} from '../../common/fieldTypes/OpenFileInput';
import {SingleDropDownSelect} from '../../common/fieldTypes/SingleDropDownSelect';
import {ValueNestedImageFields} from './nestedImageFields/ValueNestedImageFields';
import {SingleDropDown} from '../../common/fieldTypes/SingleDropDown';


type PropertiesControlType = {
    field: dataOfPropertiesTabType
}


export const PropertiesControl: FC<PropertiesControlType> = observer(({field}) => {

    const [expandImageField, setExpandImageField] = useState(false)
    const [expandSizeField, setExpandSizeField] = useState(false)

    const onImageFieldClick = useCallback(() => {
        setExpandImageField(!expandImageField)
        setExpandSizeField(false)
    }, [expandImageField])

    const onSizeFieldClick = () => {
        setExpandSizeField(!expandSizeField)
    }

    return (
        <>
            <div key={field.id} className={style.propertyDisplay}>
                <div className={style.propertyName}>
                    {field.hasNestedField && !expandImageField &&
                    <BsChevronRight className={style.icon} onClick={onImageFieldClick}/>}
                    {field.hasNestedField && expandImageField &&
                    <BsChevronDown className={style.icon} onClick={onImageFieldClick}/>}
                    <input type="text" value={field.propertyName} readOnly/>
                    {
                        expandImageField && field.hasNestedField &&
                        <NameNestedImageFields expandImageField={expandImageField}
                                               expandSizeField={expandSizeField}
                                               onSizeFieldClick={onSizeFieldClick}
                                               hasNestedField={field.hasNestedField}
                        />
                    }
                </div>
                <div className={style.propertyValue}>

                    {field.fieldType === 'editableInput' && <EditableInput propertyValue={field.propertyValue}/>}
                    {field.fieldType === 'readOnlyInput' && <ReadOnlyInput propertyValue={field.propertyValue}/>}
                    {field.fieldType === 'openFileInput' && <OpenFileInput propertyValue={field.propertyValue}/>}
                    {/*{field.fieldType === 'singleDropDownSelect' && <SingleDropDownSelect/>}*/}
                    {field.fieldType === 'singleDropDownSelect' && <SingleDropDown/>}

                    {
                        expandImageField && field.hasNestedField &&
                        <ValueNestedImageFields
                            expandSizeField={expandSizeField}
                            hasNestedField={field.hasNestedField}
                        />
                    }
                </div>
            </div>
        </>
    )
})