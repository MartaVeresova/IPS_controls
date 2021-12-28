import React, {FC, useEffect, useState} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss'
import {observer} from 'mobx-react-lite';
import {captionAttribute, defaultRelationType} from '../../controls/properties/objectTypes/ObjectTypesData';
import {storage} from '../../controls/properties/lifeCycleLevel/LifeCycleLevelData';
import {SimpleType} from '../../types/Types';

type PropsType = {
    propertyValue: number
    // displayName: string //name чекнутого элемента
    // getSelectedItem: (propertyValue: number, value: string) => void
    // setSelectedItem: (valueId: number | null, valueName: string) => void
    valueName: string
}

export const SimpleDropDown: FC<PropsType> = observer(({propertyValue, valueName}) => {
    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [data, setData] = useState<SimpleType[]>([])
    const [checkedName, setCheckedName] = useState<string>('') //name чекнутого элемента
    const [selectedId, setSelectedId] = useState<number | null>(propertyValue)//id чек.элемента, sent to server

    useEffect(() => {
        //имитация post за инитиализ.значением по айдишке
        if (checkedName === '') {
        let selectedItem
        if (valueName === 'captionAttributeId') {
            selectedItem = captionAttribute.find(findSelectedItem)
        } else if (valueName === 'defaultRelationTypeId') {
            selectedItem = defaultRelationType.find(findSelectedItem)
        } else if (valueName === 'storageId') {
            selectedItem = storage.find(findSelectedItem)
        }
        if (selectedItem) {
            setCheckedName(selectedItem.displayName)
        }
        }
    }, [valueName])

    const findSelectedItem = (el: SimpleType) => el.id === propertyValue ? el : ''

    const onInputClick = () => {
        if (!isDropDownListOpened) {
            if (valueName === 'captionAttributeId') {
                setData([{id: null, displayName: ''}, ...captionAttribute])
            }
            if (valueName === 'defaultRelationTypeId') {
                setData(defaultRelationType)
            }
            if (valueName === 'storageId') {
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
            <div key={item.displayName}
                 className={item.displayName === checkedName  ? style.selectedItem : style.listItem}
                 onClick={onOptionClick} title={item.displayName}>{item.displayName}</div>
        )
    })

    return (
        <>
            <GeneralDropDown
                isDropDownListOpened={isDropDownListOpened}
                setIsDropDownListOpened={setIsDropDownListOpened}
                selectedName={checkedName }
                onInputClick={onInputClick}
            >
                {options}
            </GeneralDropDown>
        </>
    )
})

