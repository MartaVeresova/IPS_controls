import React, {ChangeEvent, FC, memo, useState} from 'react';
import style from './EditableInput.module.scss'

type EditableInputType = {
    propertyValue: string
}

export const EditableInput: FC<EditableInputType> = memo(({propertyValue}) => {
    const [inputValue, setInputValue] = useState<string>(propertyValue) //propertyValue-приходит с сервера, selectOption-отправляю на сервер

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <>
            <input type="text" className={style.editableInput} value={inputValue} onChange={onInputChange}/>
        </>
    )
})