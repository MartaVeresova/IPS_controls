import React, {FC, useEffect, useState} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: boolean
    fieldName: string
}
type YesNoType = 'да' | 'нет'
const yesNoDropDownData: YesNoType[] = ['да', 'нет']

export const YesNoDropDown: FC<PropsType> = observer(({propertyValue, fieldName}) => {
    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [selectedName, setSelectedName] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState<boolean>(propertyValue) //sent to server


    useEffect(() => {
        setSelectedName(propertyValue ? yesNoDropDownData[0] : yesNoDropDownData[1])
    }, [propertyValue])

    const onInputClick = () => setIsDropDownListOpened(!isDropDownListOpened)

    const options = yesNoDropDownData.map(item => {
        const onOptionClick = () => {
            setSelectedOption(item === yesNoDropDownData[0])
            setSelectedName(item)
            setIsDropDownListOpened(false)
        }
        return <div key={item} className={item === selectedName ? style.selectedName : style.listItem} onClick={onOptionClick}>{item}</div>
    })

    return (
        <>
            <GeneralDropDown isDropDownListOpened={isDropDownListOpened}
                             setIsDropDownListOpened={setIsDropDownListOpened}
                             selectedName={selectedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})