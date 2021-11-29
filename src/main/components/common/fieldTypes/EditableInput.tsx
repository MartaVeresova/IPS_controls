import React, {ChangeEvent, FC, useState} from 'react';

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
            <input type="text" value={inputValue} onChange={onInputChange}/>
        </>
    )
}