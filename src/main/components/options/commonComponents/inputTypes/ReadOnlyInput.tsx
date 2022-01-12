import React, {FC, memo} from 'react';
import style from './ReadOnlyInput.module.scss'

type PropsType = {
    propertyValue: string
}

export const ReadOnlyInput: FC<PropsType> = memo(({propertyValue}) => {

    return (
        <div className={style.readOnlyInput} title={propertyValue}>
            {propertyValue}
        </div>
    )
})