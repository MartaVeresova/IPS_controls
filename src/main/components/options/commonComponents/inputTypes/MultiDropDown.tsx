import React, {FC, memo, useEffect, useRef, useState} from 'react';
import style from './MultiDropDown.module.scss'
import {useOnClickOutside} from '../../../../hooks/useOnClickOutside';
import {assignedSubjectAreaTypes} from '../../controls/properties/lifeCycleLevel/LifeCycleLevelData';
import {MultiType} from '../../types/Types';
import {Pointer} from '../Pointer';

type PropsType = {
    propertyValue: string[]
}

export const MultiDropDown: FC<PropsType> = memo(({propertyValue}) => {

        const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
        const [checkedItems, setCheckedItems] = useState<string[]>(propertyValue) //массив чекнутых айди
        const [data, setData] = useState<MultiType[]>([]) //массив всех элементов
        const [isCheckedAll, setIsCheckedAll] = useState(false)

        const dropDownRef = useRef<HTMLDivElement | null>(null)
        useOnClickOutside(dropDownRef, () => setIsDropDownListOpened(false))

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
                    nameArray.push(el.displayName)
                }
            })
            if (!nameArray.length && !isDropDownListOpened) {
                return 'Поле обязательно'
            } else {
                return nameArray.join(', ')
            }
        }

        let className = 'container'
        if (!checkedItems.length && !isDropDownListOpened) {
            className = 'error'
        }

        return (
            <>
                <div className={style.block} ref={dropDownRef}>
                    <div className={style[className]} tabIndex={0}
                         onClick={onInputClick} title={isCheckedAll ? 'Все' : inputValue()}>
                        <div className={style.value}>
                            {isCheckedAll ? 'Все' : inputValue()}
                        </div>
                        <Pointer isFieldExpanded={isDropDownListOpened} onIconClick={onInputClick} type="dropDown"/>
                    </div>

                    <div hidden={!isDropDownListOpened}>
                        <div className={style.dropDownList}>
                            <label className={style.list} onChange={onAllOptionsChange}>
                                <input type="checkbox" checked={isCheckedAll} readOnly/>
                                Все
                            </label>

                            {data.map(({id, displayName}) => {
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

                                let className = 'list'
                                if (checked) {
                                    className = 'checkedItem'
                                }
                                return (
                                    <label key={id} className={style[className]} onChange={onLabelChange}>
                                        <input type="checkbox" checked={checked} readOnly/>
                                        <div className={style.listItem}>
                                            {displayName}
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
)