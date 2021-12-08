import React, {FC, memo, useState} from 'react';
import {captionAttribute, defaultRelationType} from '../../controls/objectTypes/ObjectTypesData';
import {CaptionAttributeType, DefaultRelationTypeType} from '../types/Types';
import {GeneralDropDown} from '../GeneralDropDown';

type PropsType = {
    propertyValue: number //id чекнутого элемента
    propertyName: string
}

type DataType = {
    id: number
    name: string
}

export const SimpleDropDown: FC<PropsType> = memo(({propertyValue, propertyName}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)
    const [captionAttributeData, setCaptionAttributeData] = useState<CaptionAttributeType[]>([])
    const [defaultRelationData, setDefaultRelationData] = useState<DefaultRelationTypeType[]>([])
    const [checkedName, setCheckedName] = useState('') //name чекнутого элемента
    const [selectedId, setSelectedId] = useState<number>(propertyValue)//id чек.элемента, sent to server

    let onInputClick: () => void = () => {}
    let dataArr: DataType[] = []
    // let {onInputClick, data, setID} = simplify(propertyName)

    const findSelectedItem = (el: CaptionAttributeType | DefaultRelationTypeType) => el.id === propertyValue ? el : ''

    if (propertyName === 'Атрибут-описатель') {
        //имитация post за инитиализ.значением по айдишке
        if (checkedName === '') {
            const selectedItem = captionAttribute.find(findSelectedItem)
            if (selectedItem) {
                setCheckedName(selectedItem.displayName)
            }
        }
        onInputClick = () => {
            //имитация post за списком для дропдауна
            if (!isDropDownListOpened) {
                setCaptionAttributeData(captionAttribute)
                setIsDropDownListOpened(true)
            }
            if (isDropDownListOpened) {
                setIsDropDownListOpened(false)
            }
        }
        dataArr = captionAttributeData.map(el => ({id: el.id, name: el.displayName}))
    }

    if (propertyName === 'Связь по умолчанию') {
        //имитация post за инитиализ.значением по айдишке
        if (checkedName === '') {
            const selectedItem = defaultRelationType.find(findSelectedItem)
            if (selectedItem) {
                setCheckedName(selectedItem.name)
            }
        }
        onInputClick = () => {
            //имитация post за списком для дропдауна
            if (!isDropDownListOpened) {
                setDefaultRelationData(defaultRelationType)
                setIsDropDownListOpened(true)
            }
            if (isDropDownListOpened) {
                setIsDropDownListOpened(false)
            }
        }
        dataArr = defaultRelationData.map(el => ({id: el.id, name: el.name}))
    }


    const options = dataArr.map((item, index) => {
        const onOptionClick = () => {
            setCheckedName(item.name)
            setSelectedId(item.id)
            setIsDropDownListOpened(false)
        }
        return (
            <div key={index} onClick={onOptionClick} tabIndex={index}>{item.name}</div>
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