import React, {FC, memo, useRef, useState} from 'react';
import style from './EnumDropDown.module.scss';
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';

type PropsType = {
    propertyValue: VersionModeType
}
type VersionModeType = 'notComputableValue' | 'storedValue' | 'multiVersion'
type VersionModeValueType = 'Абстрактный тип' | 'Неверсионный тип' | 'Версионный тип'
type VersionModeDataType = {
    notComputableValue: VersionModeValueType
    storedValue: VersionModeValueType
    multiVersion: VersionModeValueType
}

const versionModeData: VersionModeDataType = {
    notComputableValue: 'Абстрактный тип',
    storedValue: 'Неверсионный тип',
    multiVersion: 'Версионный тип',
}

export const EnumDropDown: FC<PropsType> = memo(({propertyValue}) => {


    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)

//propertyValue-приходит с сервера, selectOption-отправляю на сервер
//     const [name, setName] = useState<string>(propertyValue ? yesNoDropDownData[0] : yesNoDropDownData[1])
    const [selectOption, setSelectOption] = useState<VersionModeType>(propertyValue)
    const formRef = useRef<HTMLFormElement | null>(null)

    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))
    const onInputClick = () => setIsDropDownListOpened(!isDropDownListOpened)

    // const options = dataArr.map((item, index) => {
    //     const onOptionClick = () => {
    //         setName(item.name)
    //         // setID(item.id)
    //         setSelectedId(item.id)
    //         setIsDropDownListOpened(false)
    //     }
    //     return (
    //         <li key={index} onClick={onOptionClick} tabIndex={index}>{item.name}</li>
    //     )
    // })


    return (
        <>
            {/*<form className={style.dropDown} ref={formRef}>*/}
            {/*    <input type="text"*/}
            {/*           value={name}*/}
            {/*           onClick={onInputClick}*/}
            {/*           readOnly/>*/}
            {/*    <label tabIndex={0} onClick={onInputClick}>⌵</label>*/}
            {/*    <div hidden={!isDropDownListOpened}>*/}
            {/*        <ul className={style.dropDownListOpened}>*/}
            {/*            {options}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </>
    )
})


// enum VersionMode {
//     'Абстрактный тип' = 'notComputableValue', //абстрактный тип
//     'Неверсионный тип' = 'storedValue', //неверсионный тип
//     'Версионный тип' = 'multiVersion', //версионный тип
// }
// const versionModeNames = Object.keys(VersionMode)