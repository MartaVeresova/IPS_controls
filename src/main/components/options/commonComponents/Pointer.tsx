import React, {FC} from 'react'
import style from './Pointer.module.scss';

type PointerType = 'imageFieldIcon' | 'sizeFieldIcon' | 'dropDown'

type PropsType = {
    isFieldExpanded: boolean
    onIconClick: () => void
    type: PointerType
}

export const Pointer: FC<PropsType> = ({onIconClick, isFieldExpanded, type}) => {

    let className = ''
    if (type === 'imageFieldIcon') {
        if (!isFieldExpanded) {
            className = 'imageFieldIconOff'
        } else {
            className = 'imageFieldIconOn'
        }
    }
    if (type === 'sizeFieldIcon') {
        if (!isFieldExpanded) {
            className = 'sizeFieldIconOff'
        } else {
            className = 'sizeFieldIconOn'
        }
    }
    if (type === 'dropDown') {
        if (!isFieldExpanded) {
            className = 'dropDownOff'
        } else {
            className = 'dropDownOn'
        }
    }


    return (
        <>
            <label className={style[className]} onClick={onIconClick}>&#9013;</label>
        </>
    )
}