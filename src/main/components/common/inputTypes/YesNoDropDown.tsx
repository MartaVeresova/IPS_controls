import React, {FC, memo, useRef, useState} from 'react';
import style from './YesNoDropDown.module.scss';
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';

type PropsType = {
    propertyValue: boolean
}
type YesNoType = 'да' | 'нет'
const yesNoDropDownData: YesNoType[] = ['да', 'нет']


export const YesNoDropDown: FC<PropsType> = memo(({propertyValue}) => {

    const initialValue = propertyValue ? yesNoDropDownData[0] : yesNoDropDownData[1]

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [name, setName] = useState<string>(initialValue)
    const [selectedOption, setSelectedOption] = useState<boolean>(propertyValue) //propertyValue-response, selectedOption-for sent to back
    const formRef = useRef<HTMLFormElement | null>(null)

    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))
    const onInputClick = () => setIsDropDownListOpened(!isDropDownListOpened)

    const options = yesNoDropDownData.map((item, index) => {
        const onOptionClick = () => {
            setSelectedOption(item === yesNoDropDownData[0])
            setName(item)
            setIsDropDownListOpened(false)
        }
        return <div key={index} onClick={onOptionClick} tabIndex={index}>{item}</div>
    })

    return (
        <>
            <form className={style.dropDown} ref={formRef}>
                <input type="text"
                       value={name}
                       onClick={onInputClick}
                       readOnly/>
                <label tabIndex={0} onClick={onInputClick}>⌵</label>
                <div hidden={!isDropDownListOpened}>
                    <div className={style.dropDownListOpened}>
                        {options}
                    </div>
                </div>
            </form>
        </>
    )
})