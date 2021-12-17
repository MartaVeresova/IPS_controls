import React, {FC, memo, useEffect, useState} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';

type PropsType = {
    propertyValue: string
}
type VersionModeType = 'notComputableValue' | 'storedValue' | 'multiVersion'
type VersionModeValueType = 'Абстрактный тип' | 'Неверсионный тип' | 'Версионный тип'

enum versionMode {
    notComputableValue = 'Абстрактный тип',
    storedValue = 'Неверсионный тип',
    multiVersion = 'Версионный тип',
}
const data: Array<string[]> = Object.entries(versionMode)


export const EnumDropDown: FC<PropsType> = memo(({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [checkedName, setCheckedName] = useState<string>('') //name чекнутого элемента
    const [selectedName, setSelectedName] = useState<string>(propertyValue) //sent to server

    useEffect(() => {
        data.forEach(([key, value]) => {
            if ([key, value][0] === propertyValue) setCheckedName(value)
        })
    }, [propertyValue])

    const onInputClick = () => setIsDropDownListOpened(!isDropDownListOpened)

    const options = data.map(([key, value]) => {
        const onOptionClick = () => {
            setSelectedName([key, value][0])
            setCheckedName([key, value][1])
            setIsDropDownListOpened(false)
        }

        let className = 'listItem'
        if (value === checkedName) {
            className = 'checkedItem'
        }
        return <div key={key} className={style[className]} onClick={onOptionClick}>{value}</div>
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