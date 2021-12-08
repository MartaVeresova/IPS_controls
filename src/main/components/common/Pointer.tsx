import React, {FC} from 'react'
import style from './Pointer.module.scss';

export const Pointer: FC = () => {

    return (
        <>
            <div className={style.pointer} tabIndex={0}>&rsaquo;</div>
        </>
    )
}