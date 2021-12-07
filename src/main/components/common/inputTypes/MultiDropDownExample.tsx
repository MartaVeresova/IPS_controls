import React, {FC, memo, useRef, useState} from 'react';
import style from './MultiDropDown.module.scss'
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';
import {AssignedSubjectAreaType} from '../types/Types';
import {assignedSubjectAreaTypes} from '../../controls/lifeCycleLevel/LifeCycleLevelData';

type PropsType = {
    propertyValue: string[]
}

export const MultiDropDownExample: FC<PropsType> = memo(({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [data, setData] = useState<AssignedSubjectAreaType[]>([]) // массив для дропдауна
    const [selectNames, setSelectNames] = useState<string[]>([]) //выбранные названия для отображ. в инпуте
    const [isCheckedOptions, setIsCheckedOptions] = useState<boolean[]>([]) //массив выбранных чекбоксов

    const [selectedOption, setSelectedOption] = useState<AssignedSubjectAreaType[]>([]) //массив выбранных эл-ов

    const formRef = useRef<HTMLFormElement | null>(null);
    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))


    //имитация post за инитиализ.массивом значений по массиву айдишек
    if (selectNames === []) {
        const selectedNames = assignedSubjectAreaTypes.reduce((acc: string[], el: AssignedSubjectAreaType) => {
            if (propertyValue.indexOf(el.id) !== -1) {
                acc.push(el.name)
            }
            return acc
        }, [])
        setSelectNames(selectedNames)
    }

    const onInputClick = () => {
        //имитация post за списком для дропдауна
        if (!isDropDownListOpened) {
            setData(assignedSubjectAreaTypes)
            setIsDropDownListOpened(true)
        }
        if (isDropDownListOpened) {
            setIsDropDownListOpened(false)
        }
        //показать в чекбоксах выбранные элементы
        if (isCheckedOptions === []) {
            const isSelectedValues = data.map(el => propertyValue.indexOf(el.id) !== -1)
            setIsCheckedOptions(isSelectedValues)
        }
        // if (selectedOption === []) {
        //     const selectedItems = data.filter(el => propertyValue.indexOf(el.id) !== -1 && el)
        //     setSelectedOption(selectedItems)
        // }
    }


    const onAllOptionsChange = () => {
        if (isCheckedOptions.every(el => !el) || isCheckedOptions.some(el => el)) {
            setIsCheckedOptions(isCheckedOptions.map(() => true))
        }
        if (isCheckedOptions.every(el => el)) {
            setIsCheckedOptions(isCheckedOptions.map(() => false))
        }
    }


    return (
        <>
            <form className={style.multiselect} ref={formRef}>
                <input type="text"
                       readOnly
                       onClick={onInputClick}
                       value={isCheckedOptions.every(el => el) ? 'Все' : selectNames}
                    // value={isCheckedOptions.every(el => el)
                    //     ? 'Все'
                    //     : selectedOption.map(el => el.name)}
                />
                <label tabIndex={0} className={style.icon} onClick={onInputClick}>⌵</label>

                <div hidden={!isDropDownListOpened}>
                    <ul className={style.dropDownListOpened}>
                        <label className={style.list}>
                            <input type="checkbox"
                                   checked={isCheckedOptions.every(el => el)}
                                   onChange={onAllOptionsChange}/>
                            <li tabIndex={0}>Все</li>
                        </label>

                        {data.map(({id, name}, index) => {

                            const markOptions = (position: number) => {
                                const updatedCheckedState = isCheckedOptions.map((item, index) =>
                                    index === position ? !item : item)
                                setIsCheckedOptions(updatedCheckedState)

                                const arr: AssignedSubjectAreaType[] = []
                                updatedCheckedState.forEach((el, index) => {
                                    if (el) {
                                        arr.push({
                                            id: data[index].id,
                                            name: data[index].name
                                        })
                                        return arr
                                    }
                                })
                                setSelectedOption(arr)
                            }
                            // const onCheckboxChange = () => markOptions(index)

                            return (
                                <label key={id} className={style.list} onChange={() => markOptions(index)}>
                                    <input type="checkbox"
                                           checked={isCheckedOptions[index]}/>
                                    <li tabIndex={0}>{name}</li>
                                </label>
                            )
                        })}
                    </ul>
                </div>
            </form>
        </>
    )
})

// const [checkedState, setCheckedState] = useState(new Array(assignedSubjectArea.length).fill(false))