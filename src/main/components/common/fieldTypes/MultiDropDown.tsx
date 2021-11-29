import React, {FC, useState} from 'react';
import style from './MultiDropDown.module.scss'
import {BsChevronDown} from 'react-icons/all';

//assignedSubjectAreaType
type assignedSubjectAreaType = {
    id: string
    name: string
    // checked: boolean
}

//assignedSubjectArea
const assignedSubjectArea: assignedSubjectAreaType[] = [
    {id: 'D', name: 'Администрирование системы'},
    {id: 'B', name: 'Архитектура и строительство'},
    {id: 'C', name: 'Отладка'},
    {id: 'A', name: 'Конструкторская подготовка'},
    {id: 'G', name: 'Общие'},
]

export const MultiDropDown: FC = () => {

    const [isDropdownListOpened, setIsDropdownListOpened] = useState(false) //isDropdownListOpened
    const [displayStyle, setDisplayStyle] = useState('none')
    const [selectOption, setSelectOption] = useState<assignedSubjectAreaType[]>([])
    const [checkedState, setCheckedState] = useState(new Array(assignedSubjectArea.length).fill(false))

    const onIconClick = () => {
        if (!isDropdownListOpened) {
            setDisplayStyle('flex')
            setIsDropdownListOpened(true)
        } else {
            setDisplayStyle('none')
            setIsDropdownListOpened(false)
        }
    }

    const onAllOptionsChange = () => {
        if (checkedState.every(el => el === false) || checkedState.some(el => el === true)) {
            setCheckedState(checkedState.map(() => true))
            setSelectOption(assignedSubjectArea)
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
                               onChange={onAllOptionsChange}/>
                        <li>Все</li>
                    </label>

                    {assignedSubjectArea.map(({id, name}, index) => {

                        const markOptions = (position: number) => {
                            const updatedCheckedState = checkedState.map((item, index) =>
                                index === position ? !item : item
                            )
                            setCheckedState(updatedCheckedState)

                            const arr: assignedSubjectAreaType[] = []
                            updatedCheckedState.forEach((el, index) => {
                                if (el === true) {
                                    arr.push({
                                        id: assignedSubjectArea[index].id,
                                        name: assignedSubjectArea[index].name
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

