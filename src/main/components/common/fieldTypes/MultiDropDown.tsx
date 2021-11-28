import React, {FC, useState} from 'react';
import style from './MultiDropDown.module.scss'
import {BsChevronDown} from 'react-icons/all';

type assignedSubjectAreaTypesType = {
    id: string
    name: string
}

const assignedSubjectAreaTypes: assignedSubjectAreaTypesType[] = [
    {id: 'D', name: 'Администрирование системы'},
    {id: 'B', name: 'Архитектура и строительство'},
    {id: 'C', name: 'Отладка'},
    {id: 'A', name: 'Конструкторская подготовка'},
    {id: 'G', name: 'Общие'},
]

export const MultiDropDown: FC = () => {

    const [showDropdownList, setShowDropdownList] = useState(false)
    const [displayStyle, setDisplayStyle] = useState('none')
    const [selectOption, setSelectOption] = useState<assignedSubjectAreaTypesType[]>([])
    const [checkedState, setCheckedState] = useState(new Array(assignedSubjectAreaTypes.length).fill(false))

    const onIconClick = () => {
        if (!showDropdownList) {
            setDisplayStyle('flex')
            setShowDropdownList(true)
        } else {
            setDisplayStyle('none')
            setShowDropdownList(false)
        }
    }

    const onAllCheckboxesChange = () => {
        if (checkedState.every(el => el === false) || checkedState.some(el => el === true)) {
            setCheckedState(checkedState.map(() => true))
            setSelectOption(assignedSubjectAreaTypes)
        }
        if (checkedState.every(el => el === true)) {
            setCheckedState(checkedState.map(() => false))
            setSelectOption([])
        }
    }

    return (
        <>
            <form className={style.multiselect}>
                <div className={style.selectBox}>
                    <input type="text"
                           readOnly
                           value={checkedState.every(el => el === true)
                               ? 'Все'
                               : selectOption.map(el => el.name)}/>
                    <BsChevronDown className={style.icon} onClick={onIconClick}/>
                </div>
                <ul className={style.checkboxes} style={{display: displayStyle}}>
                    <label>
                        <input type="checkbox"
                               checked={checkedState.every(el => el === true)}
                               onChange={onAllCheckboxesChange}/>
                        <li>Все</li>
                    </label>

                    {assignedSubjectAreaTypes.map(({id, name}, index) => {

                        const markOptions = (position: number) => {
                            const updatedCheckedState = checkedState.map((item, index) =>
                                index === position ? !item : item
                            )
                            setCheckedState(updatedCheckedState)

                            const arr: assignedSubjectAreaTypesType[] = []
                            updatedCheckedState.forEach((el, index) => {
                                if (el === true) {
                                    arr.push({
                                        id: assignedSubjectAreaTypes[index].id,
                                        name: assignedSubjectAreaTypes[index].name
                                    })
                                    return arr
                                }
                            })
                            setSelectOption(arr)
                        }

                        const onCheckboxChange = () => markOptions(index)


                        return (
                            <label key={id}>
                                <input type="checkbox"
                                       checked={checkedState[index]}
                                       onChange={onCheckboxChange}/>
                                <li>{name}</li>
                            </label>
                        )
                    })}
                </ul>
            </form>
        </>
    )
}

