import React, {FC} from 'react'
import style from './Pointer.module.scss';

type PointerType = 'imageFieldIcon' | 'sizeFieldIcon' | 'dropDown'

type PropsType = {
    isFieldExpanded: boolean
    onIconClick: () => void
    type: PointerType
}

export const Pointer: FC<PropsType> = props => {
    const {onIconClick, isFieldExpanded, type} = props

    function getStyle(): string {
        let className = ''
        if (type === 'imageFieldIcon') {
            !isFieldExpanded ? className = style.imageFieldIconOff : className = style.imageFieldIconOn
        }
        if (type === 'sizeFieldIcon') {
            !isFieldExpanded ? className = style.sizeFieldIconOff : className = style.sizeFieldIconOn
        }
        if (type === 'dropDown') {
            !isFieldExpanded ? className = style.dropDownOff : className = style.dropDownOn
        }
        return className;
    }


    return (
        <>
            <label className={getStyle()} onClick={onIconClick}>&#9013;</label>
        </>
    )
}