import React, {ChangeEvent, FC, useState} from 'react';

type EditableInputType = {
    propertyValue: string
}

export const EditableInput: FC<EditableInputType> = ({propertyValue}) => {
    const [value, setValue] = useState(propertyValue)

    const onEditableInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input type="text" value={value} onChange={onEditableInputChange}/>
        </>
    )
}