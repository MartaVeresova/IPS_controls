import React, {FC, FocusEvent, useState} from 'react';
import style from './MultiDropDown.module.scss'

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

    const [isDropDownListOpened, setIsDropDownListOpened] = useState(false) //isDropdownListOpened
    const [selectOption, setSelectOption] = useState<assignedSubjectAreaType[]>([])
    const [checkedState, setCheckedState] = useState(new Array(assignedSubjectArea.length).fill(false))

    const onInputClick = () => {
        setIsDropDownListOpened(!isDropDownListOpened)
    }

    const onDropDownBlur = (e: FocusEvent<HTMLInputElement | HTMLLabelElement>) => {
        const event = e.relatedTarget
        if (event === null || event.parentNode === null || event.parentNode.nodeName !== 'LABEL') {
            setIsDropDownListOpened(false)
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
                <input type="text"
                       readOnly
                       onClick={onInputClick}
                       onBlur={onDropDownBlur}
                       value={checkedState.every(el => el === true)
                           ? 'Все'
                           : selectOption.map(el => el.name)}/>

                <label tabIndex={0} className={style.icon}>⌵</label>

                <ul className={isDropDownListOpened ? style.dropDownListOpened : style.dropDownListClosed}>
                    <label className={style.list} onBlur={onDropDownBlur}>
                        <input type="checkbox"
                               checked={checkedState.every(el => el === true)}
                               onChange={onAllOptionsChange}/>
                        <li tabIndex={0}>Все</li>
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
                            <label key={id} className={style.list} onBlur={onDropDownBlur}>
                                <input type="checkbox"
                                       checked={checkedState[index]}
                                       onChange={onCheckboxChange}/>
                                <li tabIndex={index}>{name}</li>
                            </label>
                        )
                    })}
                </ul>
            </form>
        </>
    )
}

