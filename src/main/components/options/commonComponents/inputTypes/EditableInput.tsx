import React, {ChangeEvent, FC, memo, useState} from 'react';
import style from './EditableInput.module.scss'
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: string
}

export const EditableInput: FC<PropsType> = observer(({propertyValue}) => {
    const [inputValue, setInputValue] = useState<string>(propertyValue) //propertyValue-приходит с сервера, inputValue-отправляю на сервер
    const [editMode, setEditMode] = useState(false)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onDivClick = () => {
        setEditMode(true)
    }

    const onInputBlur = () => {
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