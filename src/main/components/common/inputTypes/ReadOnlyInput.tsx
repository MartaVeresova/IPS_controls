import React, {FC, memo} from 'react';
import style from './ReadOnlyInput.module.scss'

type ReadOnlyInputType = {
    propertyValue: string
}

export const ReadOnlyInput: FC<ReadOnlyInputType> = memo(({propertyValue}) => {

    return (
        <>
            <input type="text" className={style.readOnlyInput} value={propertyValue} readOnly/>
        </>
    )
})