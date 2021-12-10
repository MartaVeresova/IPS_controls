import React, {FC, useRef} from 'react';
import style from './GeneralDropDown.module.scss';
import {useOnClickOutside} from '../../hooks/useOnClickOutside';
import {Pointer} from './Pointer';

type PropsType = {
    isDropDownListOpened: boolean
    setIsDropDownListOpened: (value: boolean) => void
    checkedName: string
    onInputClick: () => void
}


export const GeneralDropDown: FC<PropsType> = (props) => {

    const {isDropDownListOpened, setIsDropDownListOpened, checkedName, onInputClick, children} = props

    const formRef = useRef<HTMLFormElement | null>(null)
    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))

    return (
        <>
            <form className={style.dropDown} ref={formRef}>
                <input type="text"
                       value={checkedName}
                       onClick={onInputClick}
                       title={checkedName}
                       readOnly/>
                <Pointer isFieldExpanded={isDropDownListOpened} onIconClick={onInputClick} type='dropDown' />
                {/*<label tabIndex={0} onClick={onInputClick}>⌵</label>*/}

                <div hidden={!isDropDownListOpened}>
                    <div className={style.dropDownListOpened}>
                        {children}
                    </div>
                </div>
            </form>
        </>
    )
}