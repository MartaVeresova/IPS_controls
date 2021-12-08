import React, {FC, memo, useEffect, useRef, useState} from 'react';
import style from './MultiDropDown.module.scss'
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';
import {assignedSubjectAreaTypes} from '../../controls/lifeCycleLevel/LifeCycleLevelData';
import {AssignedSubjectAreaType} from '../types/Types';

type PropsType = {
    propertyValue: string[]
}

export const MultiDropDown: FC<PropsType> = memo(({propertyValue}) => {

        const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
        const [checkedItems, setCheckedItems] = useState<string[]>(propertyValue) //массив чекнутых айди
        const [data, setData] = useState<AssignedSubjectAreaType[]>([]) //массив всех элементов
        const [isCheckedAll, setIsCheckedAll] = useState(false)

        const formRef = useRef<HTMLFormElement | null>(null)
        useOnClickOutside(formRef, () => setIsDropDownListOpened(false))

        useEffect(() => {
            setData(assignedSubjectAreaTypes)
        }, [])

        const onInputClick = () => {
            //имитация post за списком для дропдауна
            if (!isDropDownListOpened) {
                setData(assignedSubjectAreaTypes)
                setIsDropDownListOpened(true)
            }
            if (isDropDownListOpened) {
                setIsDropDownListOpened(false)
            }
        }

        const onAllOptionsChange = () => {
            if (isCheckedAll) {
                setIsCheckedAll(false)
                setCheckedItems([])
            }
            if (!isCheckedAll) {
                setIsCheckedAll(true)
                setCheckedItems(data.map(el => el.id))
            }
        }

        const inputValue = () => {
            let nameArray: string[] = []
            assignedSubjectAreaTypes.forEach(el => {
                if (checkedItems.some(elem => elem === el.id)) {
                    nameArray.push(el.name)
                }
            })
            if (!nameArray.length && !isDropDownListOpened) {
                return 'Поле обязательно'
            } else {
                return nameArray.join(', ')
            }
        }

        return (
            <>
                <form className={style.dropDown} ref={formRef}>
                    <input type="text"
                           readOnly
                           onClick={onInputClick}
                           value={isCheckedAll ? 'Все' : inputValue()}
                           className={!checkedItems.length && !isDropDownListOpened ? style.error : style.input}
                        // className={style.input}
                    />
                    <div tabIndex={0} className={style.icon} onClick={onInputClick}>⌵</div>

                    <div hidden={!isDropDownListOpened}>
                        <div className={style.dropDownListOpened}>
                            <label tabIndex={0} className={style.list} onChange={onAllOptionsChange}>
                                <input type="checkbox" checked={isCheckedAll} readOnly/>
                                Все
                            </label>

                            {data.map(({id, name}) => {
                                const checked = checkedItems.some(el => el === id)
                                const onLabelChange = () => {
                                    if (checked) {
                                        setCheckedItems(checkedItems.filter(el => el !== id))
                                        setIsCheckedAll(false)
                                    }
                                    if (!checked) {
                                        const newArray = [...checkedItems]
                                        newArray.push(id)
                                        setCheckedItems(newArray)
                                    }
                                }
                                return (
                                    <label tabIndex={0} key={id} className={style.list} onChange={onLabelChange}>
                                        <input type="checkbox" checked={checked} readOnly/>
                                        {name}
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </form>
            </>
        )
    }
)