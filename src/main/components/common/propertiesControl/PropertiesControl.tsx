import React, {FC, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {observer} from 'mobx-react-lite';
import {EditableInput} from '../inputTypes/EditableInput';
import {ReadOnlyInput} from '../inputTypes/ReadOnlyInput';
import {OpenFileInput} from '../inputTypes/OpenFileInput';
import {MultiDropDown} from '../inputTypes/MultiDropDown';
import {SimpleDropDown} from '../inputTypes/SimpleDropDown';
import {LifeCycleLevelDataType} from '../../controls/lifeCycleLevel/LifeCycleLevelData';


type PropertiesControlType = {
    field: LifeCycleLevelDataType
}

export const PropertiesControl: FC<PropertiesControlType> = observer(({field}) => {

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState(true)

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
                    <OpenFileInput propertyValue={field.propertyValue}
                                   isImageFieldExpanded={isImageFieldExpanded}
                                   isSizeFieldExpanded={isSizeFieldExpanded}/>}

                    {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDown propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown/>}
                </div>
            </div>
        </>
    )
})