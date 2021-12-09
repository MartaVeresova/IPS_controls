import React, {FC, memo, useEffect, useState} from 'react';
import {captionAttribute, defaultRelationType} from '../../controls/objectTypes/ObjectTypesData';
import {GeneralDropDown} from '../GeneralDropDown';
import {SimpleType} from '../types/Types';
import {storage} from '../../controls/lifeCycleLevel/LifeCycleLevelData';

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
                setData(captionAttribute)
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

    const options = data.map((item, index) => {
        const onOptionClick = () => {
            setCheckedName(item.displayName)
            setSelectedId(item.id)
            setIsDropDownListOpened(false)
        }
        return (
            <div key={item.displayName} onClick={onOptionClick} tabIndex={index}>{item.displayName}</div>
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

// let {onInputClick, data, setID} = simplify(propertyName)

// //имитация post за инитиализ.значением по айдишке
// useEffect(() => {
//     const selectedItem = defaultRelationType.find(el => el.id === propertyValue ? el : '')
//     selectedItem && setSelectedDefaultRelationTypeName(selectedItem.name)
// }, [propertyValue, setSelectedDefaultRelationTypeName])
//
// //имитация post за списком для дропдауна
// useEffect(() => {
//     if (isDropDownListOpened) {
//         setDefaultRelationData(defaultRelationType)
//     }
// }, [isDropDownListOpened])


// let setID = (id) => {
//     dispatch(atrubuteAC(id))
// }

// let setID = (id) => {
//     dispatch(Связь по умолчаниюAC(id))
// }