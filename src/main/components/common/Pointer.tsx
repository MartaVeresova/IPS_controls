import React, {FC} from 'react'
import style from './Pointer.module.scss';

type PropsType = {
    onImageClick: () => void
    isImageFieldExpanded: boolean
}

export const Pointer: FC<PropsType> = ({onImageClick, isImageFieldExpanded}) => {

    return (
        <>
            <div className={isImageFieldExpanded ? style.activePointer : style.pointer}
                 tabIndex={0}
                 onClick={onImageClick}
            >
                &rsaquo;
            </div>
        </>
    )
}