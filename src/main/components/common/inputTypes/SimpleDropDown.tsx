import React, {FC, FocusEvent, useState} from 'react';
import style from './SimpleDropDown.module.scss'

// type simpleDropDownDataType = 'да' | 'нет'

type SimpleDropDownType = {
    propertyValue: boolean
}

const simpleDropDownData: string[] = ['да', 'нет']


export const SimpleDropDown: FC<SimpleDropDownType> = ({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState(false)
    const [selectOption, setSelectOption] = useState<boolean>(propertyValue)

    const onInputClick = () => {
        setIsDropDownListOpened(!isDropDownListOpened)
    }

    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        const event = e.relatedTarget
        if (event === null || event.nodeName !== 'LI') {
            setIsDropDownListOpened(false)
        }
    }

    const options = simpleDropDownData.map((item, index) => {
        const onOptionClick = () => {
            setSelectOption(item === 'да')
            setIsDropDownListOpened(false)
        }
        return (
            <li key={index} onClick={onOptionClick} tabIndex={index}>{item}</li>
        )
    })

    return (
        <>
            <form className={style.dropDown}>
                <input type="text"
                       value={selectOption ? simpleDropDownData[0] : simpleDropDownData[1]}
                       onClick={onInputClick}
                       onBlur={onInputBlur}
                       readOnly/>
                <label tabIndex={0}>⌵</label>
                <ul className={isDropDownListOpened ? style.dropDownListOpened : style.dropDownListClosed}>
                    {options}
                </ul>
            </form>
        </>
    )
}
