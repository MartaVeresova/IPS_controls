import React, {FC} from 'react'
import style from './Pointer.module.scss';

type PropsType = {
    isFieldExpanded: boolean
    onIconClick: () => void
    type: string
}

export const Pointer: FC<PropsType> = ({onIconClick, isFieldExpanded, type}) => {

    const pointerStyle = () => {
        if (type === 'imageFieldIcon') {
            if (!isFieldExpanded) {
                return style.imageFieldIconOff
            } else {
                return style.imageFieldIconOn
            }
        }
        if (type === 'sizeFieldIcon') {
            if (!isFieldExpanded) {
                return style.sizeFieldIconOff
            } else {
                return style.sizeFieldIconOn
            }
        }
        if (type === 'dropDown') {
            if (!isFieldExpanded) {
                return style.dropDownOff
            } else {
                return style.dropDownOn
            }
        }
    }


    return (
        <>
            <label className={pointerStyle()}
                   onClick={onIconClick}>&#9013;</label>
        </>
    )
}