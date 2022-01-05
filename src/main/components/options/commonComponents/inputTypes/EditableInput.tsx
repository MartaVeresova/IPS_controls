import React, {ChangeEvent, FC, FocusEvent, useEffect} from 'react';
import style from './EditableInput.module.scss'
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: string
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        inputValue: string,
        editMode: boolean,
        setInputValue: (value: string) => void,
        setEditMode: (value: boolean) => void,
    }
}

export const EditableInput: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    useEffect(() => {
        additionalModel.setInputValue(propertyValue)
    }, [additionalModel, propertyValue])


    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        additionalModel.setInputValue(e.currentTarget.value)
    }

    const onDivClick = () => {
        additionalModel.setEditMode(true)
    }

    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        setSelectedItem(e.target.value, fieldName)
        additionalModel.setEditMode(false)
    }


    return (
        <>
            <div className={style.editableInput} tabIndex={0}>
                {!additionalModel.editMode
                    ? <div onClick={onDivClick} title={additionalModel.inputValue}>{additionalModel.inputValue}</div>
                    :
                    <input type="text" value={additionalModel.inputValue} onChange={onInputChange} onBlur={onInputBlur}
                           autoFocus/>}
            </div>
        </>
    )
})