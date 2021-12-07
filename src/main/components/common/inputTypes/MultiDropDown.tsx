import React, {FC, memo, useRef, useState} from 'react';
import style from './MultiDropDown.module.scss'
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';
import {assignedSubjectAreaTypes} from '../../controls/lifeCycleLevel/LifeCycleLevelData';

type PropsType = {
    propertyValue: string[]
}

export const MultiDropDown: FC<PropsType> = memo(({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [checkedArray, setCheckedArray] = useState(propertyValue) //массив чекнутых айди
    const [checkedAll, setCheckedAll] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)

    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))

    const onInputClick = () => {
        setIsDropDownListOpened(!isDropDownListOpened)
    }

    const onAllOptionsChange = () => {
        if (checkedAll) {
            setCheckedAll(false)
            setCheckedArray([])
        }
        if (!checkedAll) {
            setCheckedAll(true)
            setCheckedArray(assignedSubjectAreaTypes.map(el => el.id))
        }
    }

    const inputValue = () => {
        let nameArray: string[] = []
        assignedSubjectAreaTypes.forEach(el => {
            if (checkedArray.some(elem => elem === el.id)) {
                nameArray.push(el.name)
            }
        })
        return nameArray.join(', ')
    }


    return (
        <>
            <form className={style.multiselect} ref={formRef}>
                <input type="text"
                       readOnly
                       onClick={onInputClick}
                       value={checkedAll ? 'Все' : inputValue()}
                />
                <label tabIndex={0} className={style.icon} onClick={onInputClick}>⌵</label>

                <div hidden={!isDropDownListOpened}>
                    <ul className={style.dropDownListOpened}>

                        <label tabIndex={0} className={style.list} onChange={onAllOptionsChange}>
                            <input type="checkbox"
                                   checked={checkedAll}
                                   readOnly/>
                            Все
                        </label>

                        {assignedSubjectAreaTypes.map(({id, name}, index) => {
                            const checked = checkedArray.some(el => el === id)
                            const onLabelChange = () => {
                                if (checked) {
                                    setCheckedArray(checkedArray.filter(el => el !== id))
                                    setCheckedAll(false)
                                } else {
                                    const newArray = [...checkedArray]
                                    newArray.push(id)
                                    setCheckedArray(newArray)
                                }
                            }
                            return <label tabIndex={0} key={id} className={style.list}
                                          onChange={onLabelChange}>
                                <input type="checkbox"
                                       checked={checked}
                                       readOnly/>
                                {name}
                            </label>
                        })}
                    </ul>
                </div>
            </form>
        </>
    )
})

// const [checkedState, setCheckedState] = useState(new Array(assignedSubjectArea.length).fill(false))