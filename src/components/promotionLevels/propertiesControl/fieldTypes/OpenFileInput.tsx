import React, {FC, useState} from 'react';
import style from './OpenFileInput.module.scss'

type OpenFileInputType = {
    propertyValue: string
}

export const OpenFileInput: FC<OpenFileInputType> = ({propertyValue}) => {

    const [isFocused, setIsFocused] = useState(false)

    const onInputFocus = () => {
        setIsFocused(true)
    }
    const onBlurFocus = () => {
        setIsFocused(false)
    }
    const stopPropagation = () => {
        // e.stopImmediatePropagation()
    }
    const onInputChange = () => {

    }

    return (
        <>
            <div className={style.inputField}>
                <input type="text" value={propertyValue} onFocus={onInputFocus} onBlur={onBlurFocus} onChange={onInputChange}/>
                <input type="file" name="file" id="file" accept=".ico" onClick={stopPropagation}/>
                <button>...</button>

            </div>
        </>
    )
}