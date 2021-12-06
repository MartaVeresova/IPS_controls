import React, {FC, memo, useRef, useState} from 'react';
import style from './MultiDropDown.module.scss'
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';

type PropsType = {
    propertyValue: string[]
}

type assignedSubjectAreaType = {
    id: string
    name: string
}

const assignedSubjectArea: assignedSubjectAreaType[] = [
    {id: 'D', name: 'Администрирование системы'},
    {id: 'B', name: 'Архитектура и строительство'},
    {id: 'C', name: 'Отладка'},
    {id: 'A', name: 'Конструкторская подготовка'},
    {id: 'G', name: 'Общие'},
]

const assignedSubjectAreaIds: string[] = ['B', 'C']


const isSelectedValues = assignedSubjectArea.map(el => assignedSubjectAreaIds.indexOf(el.id) !== -1)
const selectedItems = assignedSubjectArea.filter(el => assignedSubjectAreaIds.indexOf(el.id) !== -1 && el)

const selectedNames = assignedSubjectArea.reduce((acc: string[], el: assignedSubjectAreaType) => {
    if (assignedSubjectAreaIds.indexOf(el.id) !== -1) {
        acc.push(el.name)
    }
    return acc
}, [])

export const MultiDropDown: FC<PropsType> = memo(({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [selectOption, setSelectOption] = useState<assignedSubjectAreaType[]>(selectedItems)
    // const [selectNames, setSelectNames] = useState<string[]>(selectedNames)
    // const [checkedState, setCheckedState] = useState(new Array(assignedSubjectArea.length).fill(false))
    const [checkedState, setCheckedState] = useState<boolean[]>(isSelectedValues)

    const formRef = useRef<HTMLFormElement | null>(null);
    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))

    const onInputClick = () => {
        setIsDropDownListOpened(!isDropDownListOpened)
    }

    const onAllOptionsChange = () => {
        if (checkedState.every(el => !el) || checkedState.some(el => el)) {
            setCheckedState(checkedState.map(() => true))
            setSelectOption(assignedSubjectArea)
        }
        if (checkedState.every(el => el)) {
            setCheckedState(checkedState.map(() => false))
            setSelectOption([])
        }
    }

    return (
        <>
            <form className={style.multiselect} ref={formRef}>
                <input type="text"
                       readOnly
                       onClick={onInputClick}
                       value={checkedState.every(el => el)
                           ? 'Все'
                           : selectOption.map(el => el.name)}
                />
                <label tabIndex={0} className={style.icon} onClick={onInputClick}>⌵</label>

                <div hidden={!isDropDownListOpened}>
                    <ul className={style.dropDownListOpened}>
                        <label className={style.list}>
                            <input type="checkbox"
                                   checked={checkedState.every(el => el)}
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
                                    if (el) {
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
                                <label key={id} className={style.list}>
                                    <input type="checkbox"
                                           checked={checkedState[index]}
                                           onChange={onCheckboxChange}/>
                                    <li tabIndex={index}>{name}</li>
                                </label>
                            )
                        })}
                    </ul>
                </div>
            </form>
        </>
    )
})

