import React, {FC, useEffect, useState} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../hooks/useStore';

type PropsType = {
    propertyValue: boolean
    valueName: string
}
type YesNoType = 'да' | 'нет'
const yesNoDropDownData: YesNoType[] = ['да', 'нет']

export const YesNoDropDown: FC<PropsType> = observer(({propertyValue, valueName}) => {
    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const {yesNoDropDown} = useStore()

    useEffect(() => {
        yesNoDropDown.setSelectedName(propertyValue ? yesNoDropDownData[0] : yesNoDropDownData[1])
    }, [yesNoDropDown, propertyValue])

    const onInputClick = () => setIsDropDownListOpened(!isDropDownListOpened)

    const options = yesNoDropDownData.map(item => {
        const onOptionClick = () => {
            yesNoDropDown.setSelectedName(item)
            yesNoDropDown.setSelectedOption(item === yesNoDropDownData[0])
            setIsDropDownListOpened(false)
        }
        return <div key={item} className={item === yesNoDropDown.selectedName ? style.selectedItem : style.listItem} onClick={onOptionClick}>{item}</div>
    })

    return (
        <>
            <GeneralDropDown isDropDownListOpened={isDropDownListOpened}
                             setIsDropDownListOpened={setIsDropDownListOpened}
                             selectedName={yesNoDropDown.selectedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})