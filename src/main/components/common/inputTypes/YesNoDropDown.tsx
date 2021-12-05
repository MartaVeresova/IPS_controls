import React, {FC, memo, useRef, useState} from 'react';
import style from './YesNoDropDown.module.scss';
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';

type PropsType = {
    propertyValue: boolean
}
type YesNoType = 'да' | 'нет'
const yesNoDropDownData: YesNoType[] = ['да', 'нет']


export const YesNoDropDown: FC<PropsType> = memo(({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [selectOption, setSelectOption] = useState<boolean>(propertyValue) //propertyValue-приходит с сервера, selectOption-отправляю на сервер
    const formRef = useRef<HTMLFormElement | null>(null)

    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))
    const onInputClick = () => setIsDropDownListOpened(!isDropDownListOpened)

    const options = yesNoDropDownData.map((item, index) => {
        const onOptionClick = () => {
            setSelectOption(item === yesNoDropDownData[0])
            setIsDropDownListOpened(false)
        }
        return <li key={index} onClick={onOptionClick} tabIndex={index}>{item}</li>
    })

    return (
        <>
            <form className={style.dropDown} ref={formRef}>
                <input type="text"
                       value={selectOption ? yesNoDropDownData[0] : yesNoDropDownData[1]}
                       onClick={onInputClick}
                       readOnly/>
                <label tabIndex={0} onClick={onInputClick}>⌵</label>
                <div hidden={!isDropDownListOpened}>
                    <ul className={style.dropDownListOpened}>
                        {options}
                    </ul>
                </div>
            </form>
        </>
    )
})