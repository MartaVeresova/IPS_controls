import React, {ChangeEvent, FC, FocusEvent, memo, useEffect, useState} from 'react';
import style from './EditableInput.module.scss'
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: string
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
}

export const EditableInput: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem} = props

    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState<string>(propertyValue)


    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onDivClick = () => {
        setEditMode(true)
    }

    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        setSelectedItem(e.target.value, fieldName)
        setEditMode(false)
    }


    return (
        <>
            <div className={style.editableInput} tabIndex={0}>
                {!editMode
                    ? <div onClick={onDivClick} title={inputValue}>{inputValue}</div>
                    : <input type="text" value={inputValue} onChange={onInputChange} onBlur={onInputBlur} autoFocus/>}
            </div>
        </>
    )
})