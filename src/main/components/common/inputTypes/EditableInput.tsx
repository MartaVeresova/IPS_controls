import React, {ChangeEvent, FC, useState} from 'react';
import style from './EditableInput.module.scss'

type EditableInputType = {
    propertyValue: string
}

export const EditableInput: FC<EditableInputType> = ({propertyValue}) => {
    const [inputValue, setInputValue] = useState(propertyValue)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <>
            <input type="text" className={style.editableInput} value={inputValue} onChange={onInputChange}/>
        </>
    )
}