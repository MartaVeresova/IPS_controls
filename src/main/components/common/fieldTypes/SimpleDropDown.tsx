import React, {FC, FocusEvent, useState} from 'react';
import style from './SimpleDropDown.module.scss'
import {BsChevronDown} from 'react-icons/all';

type simpleDropDownDataType = 'да' | 'нет'

//simpleDropDown ['да', 'нет']
const simpleDropDownData: string[] = ['да', 'нет']


export const SimpleDropDown: FC = () => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState(false)
    const [selectOption, setSelectOption] = useState('')

    const onIconClick = () => {
        setIsDropDownListOpened(!isDropDownListOpened)
    }

    const onIconBlur = (e: FocusEvent<SVGElement>) => {
        // console.log(e)
        // setIsDropDownListOpened(false)
    }

    const options = simpleDropDownData.map(item => {
        const onOptionClick = () => {
            setSelectOption(item)
            setIsDropDownListOpened(false)
        }
        return (
            <li key={item} onClick={onOptionClick}>{item}</li>
        )
    })

    return (
        <>
            <form className={style.dropDown}>
                <div className={style.select}>
                    <input type="text" value={selectOption} readOnly/>
                    <BsChevronDown className={style.icon} onClick={onIconClick} tabIndex={0} onBlur={onIconBlur}/>
                </div>

                <ul className={isDropDownListOpened ? style.dropDownList : style.noneList}>
                    {options}
                </ul>
            </form>
        </>
    )
}

