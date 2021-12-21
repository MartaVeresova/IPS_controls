import React, {FC, memo, useEffect, useState} from 'react';
import {captionAttribute, defaultRelationType} from '../../controls/properties/objectTypes/ObjectTypesData';
import {GeneralDropDown} from '../GeneralDropDown';
import {SimpleType} from '../../types/Types';
import {storage} from '../../controls/properties/lifeCycleLevel/LifeCycleLevelData';
import style from '../GeneralDropDown.module.scss'

type PropsType = {
    propertyValue: number //id чекнутого элемента
    propertyName: string
}

export const SimpleDropDown: FC<PropsType> = memo(({propertyValue, propertyName}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [data, setData] = useState<SimpleType[]>([])
    const [checkedName, setCheckedName] = useState<string>('') //name чекнутого элемента
    const [selectedId, setSelectedId] = useState<number | null>(propertyValue)//id чек.элемента, sent to server

    useEffect(() => {
        //имитация post за инитиализ.значением по айдишке
        if (checkedName === '') {
            if (propertyName === 'Атрибут-описатель') {
                const selectedItem = captionAttribute.find(findSelectedItem)
                if (selectedItem) {
                    setCheckedName(selectedItem.displayName)
                }
            }
            if (propertyName === 'Связь по умолчанию') {
                const selectedItem = defaultRelationType.find(findSelectedItem)
                if (selectedItem) {
                    setCheckedName(selectedItem.displayName)
                }
            }
            if (propertyName === 'Файловый шкаф') {
                const selectedItem = storage.find(findSelectedItem)
                if (selectedItem) {
                    setCheckedName(selectedItem.displayName)
                }
            }
        }
    }, [propertyName])

    const findSelectedItem = (el: SimpleType) => el.id === propertyValue ? el : ''

    const onInputClick = () => {
        //имитация post за списком для дропдауна
        if (!isDropDownListOpened) {
            if (propertyName === 'Атрибут-описатель') {
                setData([{id: null, displayName: ''}, ...captionAttribute])
            }
            if (propertyName === 'Связь по умолчанию') {
                setData(defaultRelationType)
            }
            if (propertyName === 'Файловый шкаф') {
                setData([{id: null, displayName: ''}, ...storage])
            }
            setIsDropDownListOpened(true)
        }
        if (isDropDownListOpened) {
            setIsDropDownListOpened(false)
        }
    }

    const options = data.map(item => {
        const onOptionClick = () => {
            setCheckedName(item.displayName)
            setSelectedId(item.id)
            setIsDropDownListOpened(false)
        }
        return (
            <div key={item.displayName} className={item.displayName === checkedName ? style.checkedItem : style.listItem}
                 onClick={onOptionClick} title={item.displayName}>{item.displayName}</div>
        )
    })

    return (
        <>
            <GeneralDropDown
                isDropDownListOpened={isDropDownListOpened}
                setIsDropDownListOpened={setIsDropDownListOpened}
                checkedName={checkedName}
                onInputClick={onInputClick}
            >
                {options}
            </GeneralDropDown>
        </>
    )
})

