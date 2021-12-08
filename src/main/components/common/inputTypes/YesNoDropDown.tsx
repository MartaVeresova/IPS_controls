import React, {FC, memo, useEffect, useState} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';

type PropsType = {
    propertyValue: boolean
}
type YesNoType = 'да' | 'нет'
const yesNoDropDownData: YesNoType[] = ['да', 'нет']

export const YesNoDropDown: FC<PropsType> = memo(({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [checkedName, setCheckedName] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState<boolean>(propertyValue) //sent to server

    useEffect(() => {
        setCheckedName(propertyValue ? yesNoDropDownData[0] : yesNoDropDownData[1])
    },[propertyValue])

    const onInputClick = () => setIsDropDownListOpened(!isDropDownListOpened)

    const options = yesNoDropDownData.map((item, index) => {
        const onOptionClick = () => {
            setSelectedOption(item === yesNoDropDownData[0])
            setCheckedName(item)
            setIsDropDownListOpened(false)
        }
        return <div key={index} onClick={onOptionClick} tabIndex={index}>{item}</div>
    })

    return (
        <>
            <GeneralDropDown isDropDownListOpened={isDropDownListOpened}
                             setIsDropDownListOpened={setIsDropDownListOpened}
                             checkedName={checkedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})