import React, {FC, useCallback, useEffect, useRef} from 'react';
import style from './MultiDropDown.module.scss'
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';
import {Pointer} from '../Pointer';
import {observer} from 'mobx-react-lite';
import {MultiDropDownType} from '../../types/Types';

type PropsType = {
    propertyValue: string[]
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        multiDropDownList: MultiDropDownType[],
        isCheckedAll: boolean,
        isDropDownListOpened: boolean,
        getMultiDropDownSelectedItem: (ids: string[]) => void,
        getMultiDropDownList: (ids: string[]) => void,
        setIsCheckedAll: (value: boolean) => void,
        setIsDropDownListOpened: (value: boolean) => void,
    }
}

export const MultiDropDown: FC<PropsType> = observer(props => {
        const {
            propertyValue,
            fieldName,
            setSelectedItem,
            additionalModel
        } = props

        const dropDownRef = useRef<HTMLDivElement | null>(null)
        useOnClickOutside(dropDownRef, () => additionalModel.setIsDropDownListOpened(false))

        useEffect(() => {
            additionalModel.getMultiDropDownSelectedItem(propertyValue)
        }, [additionalModel, propertyValue])

        const onInputClick = useCallback(() => {
            if (!additionalModel.isDropDownListOpened) {
                additionalModel.getMultiDropDownList(propertyValue)
            }
            additionalModel.setIsDropDownListOpened(!additionalModel.isDropDownListOpened)
        }, [additionalModel, propertyValue])


        const onAllOptionsChange = () => {
            if (additionalModel.isCheckedAll) {
                setSelectedItem([], fieldName)
            }
            if (!additionalModel.isCheckedAll) {
                setSelectedItem(additionalModel.multiDropDownList.map((item: MultiDropDownType) => item.id), fieldName)
            }
            additionalModel.setIsCheckedAll(!additionalModel.isCheckedAll)
        }

        const inputValue = () => {
            let nameArray: string[] = []
            additionalModel.multiDropDownList.forEach((item: MultiDropDownType) => {
                if (propertyValue.some(elem => elem === item.id)) {
                    nameArray.push(item.displayName)
                }
            })
            if (!nameArray.length && !additionalModel.isDropDownListOpened) {
                return 'Поле обязательно'
            } else {
                return nameArray.join(', ')
            }
        }

        return (
            <>
                <div className={style.block} ref={dropDownRef}>
                    <div
                        className={!propertyValue.length && !additionalModel.isDropDownListOpened ? style.error : style.container}
                        tabIndex={0}
                        onClick={onInputClick} title={additionalModel.isCheckedAll ? 'Все' : inputValue()}>
                        <div className={style.value}>
                            {additionalModel.isCheckedAll ? 'Все' : inputValue()}
                        </div>
                        <Pointer isFieldExpanded={additionalModel.isDropDownListOpened} onIconClick={onInputClick}
                                 type="dropDown"/>
                    </div>

                    <div hidden={!additionalModel.isDropDownListOpened}>
                        <div className={style.dropDownList}>
                            <label className={style.list} onChange={onAllOptionsChange}>
                                <input type="checkbox" checked={additionalModel.isCheckedAll} readOnly/>
                                Все
                            </label>

                            {additionalModel.multiDropDownList.map(({id, displayName}: MultiDropDownType) => {
                                const checkedItem = propertyValue.some(item => item === id)
                                const onCheckboxChange = () => {
                                    if (checkedItem) {
                                        setSelectedItem(propertyValue.filter(item => item !== id), fieldName)
                                        additionalModel.setIsCheckedAll(false)
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