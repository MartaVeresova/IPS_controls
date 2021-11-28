import React, {FC, FocusEvent, useState} from 'react';
import style from './SingleDropDown.module.scss'
import {BsChevronDown} from 'react-icons/all';

type singleDropDownDataType = {
    id: number
    option: string
}

const singleDropDownData: singleDropDownDataType[] = [
    {id: 1, option: 'да'},
    {id: 2, option: 'нет'},
]

export const SingleDropDown: FC = () => {

    const [showDropdownList, setShowDropdownList] = useState(false)
    const [selectOption, setSelectOption] = useState('')

    const onDropDownListClick = () => {
        setShowDropdownList(!showDropdownList)
    }

    const onBlur = (e: FocusEvent<SVGElement>) => {
        console.log(e)
        // setShowDropdownList(false)
    }

    const options = singleDropDownData.map(item => {
        const onSelectOption = () => {
            setSelectOption(item.option)
            setShowDropdownList(false)
        }
        return (
            <li key={item.id} onClick={onSelectOption}>{item.option}</li>
        )
    })

    return (
        <>
            <form className={style.dropdown}>
                <div className={style.select}>
                    <input type="text" value={selectOption} readOnly/>
                    <BsChevronDown tabIndex={0} className={style.icon} onClick={onDropDownListClick} onBlur={onBlur}/>
                </div>

                <ul className={showDropdownList ? style.dropdownList : style.noneList}>
                    {options}
                </ul>
            </form>
        </>
    )
}

