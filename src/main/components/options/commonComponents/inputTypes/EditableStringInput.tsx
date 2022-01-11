import React, {ChangeEvent, FC, FocusEvent, useEffect} from 'react';
import style from './EditableStringInput.module.scss'
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: string
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        stringInputValue: string,
        setInputValue: (value: string) => void,
        isEditMode: boolean,
        setIsEditMode: (value: boolean) => void,
    }
}

export const EditableStringInput: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    useEffect(() => {
        additionalModel.setInputValue(propertyValue)
    }, [additionalModel, propertyValue])


    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        additionalModel.setInputValue(e.currentTarget.value)
    }

    const onDivClick = () => {
        additionalModel.setIsEditMode(true)
    }

    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        setSelectedItem(e.target.value, fieldName)
        additionalModel.setIsEditMode(false)
    }


    return (
        <div className={style.editableStringInput} tabIndex={0}>
            {!additionalModel.isEditMode
                ? <div onClick={onDivClick} className={style.offEditingMode} title={additionalModel.stringInputValue}>
                    {additionalModel.stringInputValue}</div>
                : <input type="text" className={style.onEditingMode} value={additionalModel.stringInputValue}
                         onChange={onInputChange} onBlur={onInputBlur} autoFocus/>}
        </div>
    )
})