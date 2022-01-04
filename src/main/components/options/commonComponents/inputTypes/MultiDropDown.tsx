import React, {FC, useCallback, useRef} from 'react';
import style from './MultiDropDown.module.scss'
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';
import {Pointer} from '../Pointer';
import {MultiDropDownType} from '../../../store/MultiDropDownModel';
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: string[]
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    dropDownModel: any
}

export const MultiDropDown: FC<PropsType> = observer(props => {
        const {
            propertyValue,
            fieldName,
            setSelectedItem,
            dropDownModel
        } = props

        const dropDownRef = useRef<HTMLDivElement | null>(null)
        useOnClickOutside(dropDownRef, () => dropDownModel.setIsDropDownListOpened(false))

        const onInputClick = useCallback(() => {
            if (!dropDownModel.isDropDownListOpened) {
                dropDownModel.getMultiDropDownList(propertyValue)
            }
            dropDownModel.setIsDropDownListOpened(!dropDownModel.isDropDownListOpened)
        }, [dropDownModel, propertyValue])


        const onAllOptionsChange = () => {
            if (dropDownModel.isCheckedAll) {
                setSelectedItem([], fieldName)
            }
            if (!dropDownModel.isCheckedAll) {
                setSelectedItem(dropDownModel.multiDropDownList.map((item: MultiDropDownType) => item.id), fieldName)
            }
            dropDownModel.setIsCheckedAll(!dropDownModel.isCheckedAll)
        }

        const inputValue = () => {
            let nameArray: string[] = []
            dropDownModel.multiDropDownList.forEach((item: MultiDropDownType) => {
                if (propertyValue.some(elem => elem === item.id)) {
                    nameArray.push(item.displayName)
                }
            })
            if (!nameArray.length && !dropDownModel.isDropDownListOpened) {
                return 'Поле обязательно'
            } else {
                return nameArray.join(', ')
            }
        }

        return (
            <>
                <div className={style.block} ref={dropDownRef}>
                    <div
                        className={!propertyValue.length && !dropDownModel.isDropDownListOpened ? style.error : style.container}
                        tabIndex={0}
                        onClick={onInputClick} title={dropDownModel.isCheckedAll ? 'Все' : inputValue()}>
                        <div className={style.value}>
                            {dropDownModel.isCheckedAll ? 'Все' : inputValue()}
                        </div>
                        <Pointer isFieldExpanded={dropDownModel.isDropDownListOpened} onIconClick={onInputClick}
                                 type="dropDown"/>
                    </div>

                    <div hidden={!dropDownModel.isDropDownListOpened}>
                        <div className={style.dropDownList}>
                            <label className={style.list} onChange={onAllOptionsChange}>
                                <input type="checkbox" checked={dropDownModel.isCheckedAll} readOnly/>
                                Все
                            </label>

                            {dropDownModel.multiDropDownList.map(({id, displayName}: MultiDropDownType) => {
                                const checkedItem = propertyValue.some(item => item === id)
                                const onCheckboxChange = () => {
                                    if (checkedItem) {
                                        setSelectedItem(propertyValue.filter(item => item !== id), fieldName)
                                        dropDownModel.setIsCheckedAll(false)
                                    }
                                    if (!checkedItem) {
                                        const newArray = [...propertyValue]
                                        newArray.push(id)
                                        setSelectedItem(newArray, fieldName)
                                    }
                                }

                                return (
                                    <label key={id} className={checkedItem ? style.checkedItem : style.list}
                                           onChange={onCheckboxChange}>
                                        <input type="checkbox" checked={checkedItem} readOnly/>
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