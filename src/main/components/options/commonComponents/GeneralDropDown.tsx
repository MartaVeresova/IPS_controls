import React, {FC, useRef} from 'react';
import style from './GeneralDropDown.module.scss';
import {useOnClickOutside} from '../../hooks/useOnClickOutside';
import {Pointer} from './Pointer';

type PropsType = {
    isDropDownListOpened: boolean
    setIsDropDownListOpened: (value: boolean) => void
    selectedName: string | undefined
    onInputClick: () => void
}


export const GeneralDropDown: FC<PropsType> = props => {
    const {isDropDownListOpened, setIsDropDownListOpened, selectedName, onInputClick, children} = props

    const formRef = useRef<HTMLDivElement | null>(null)
    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))


    return (
        <>
            <div className={style.wrap} ref={formRef}>
                <div className={style.container} onClick={onInputClick} title={selectedName} tabIndex={0}>
                    <div className={style.selectedName}>{selectedName}</div>
                    <Pointer isFieldExpanded={isDropDownListOpened} onIconClick={onInputClick} type="dropDown"/>
                </div>
                <div hidden={!isDropDownListOpened}>
                    <div className={style.dropDownList}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}