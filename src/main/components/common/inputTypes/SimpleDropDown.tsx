import React, {FC, memo, useRef, useState} from 'react';
import style from './SimpleDropDown.module.scss';
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';
import {captionAttribute, defaultRelationType} from '../../controls/objectTypes/ObjectTypesData';
import {CaptionAttributeType, DefaultRelationTypeType} from '../types/Types';

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

//массив всех элементов для дропдауна "Атрибут-описатель"
    const [captionAttributeData, setCaptionAttributeData] = useState<CaptionAttributeType[]>([])
//массив всех элементов для дропдауна "Связь по умолчанию"
    const [defaultRelationData, setDefaultRelationData] = useState<DefaultRelationTypeType[]>([])

//name чекнутого элемента
    const [name, setName] = useState('')
//id чекнутого элемента
    const [selectedId, setSelectedId] = useState<number>(propertyValue)

    const formRef = useRef<HTMLFormElement | null>(null)
    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))

    let onInputClick
    let dataArr: DataType[] = []
    // let setID: Function
    // let {onInputClick, data, setID} = simplify(propertyName)

    const findSelectedItem = (el: CaptionAttributeType | DefaultRelationTypeType) => el.id === propertyValue ? el : ''

    if (propertyName === 'Атрибут-описатель') {
        //имитация post за инитиализ.значением по айдишке
        if (name === '') {
            const selectedItem = captionAttribute.find(findSelectedItem)
            if (selectedItem) {
                setName(selectedItem.displayName)
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
        // setID = setSelectedCaptionAttributeId
    }

    if (propertyName === 'Связь по умолчанию') {
        //имитация post за инитиализ.значением по айдишке
        if (name === '') {
            const selectedItem = defaultRelationType.find(findSelectedItem)
            if (selectedItem) {
                setName(selectedItem.name)
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
        // setID = setSelectedDefaultRelationTypeId
    }


    const options = dataArr.map((item, index) => {
        const onOptionClick = () => {
            setName(item.name)
            // setID(item.id)
            setSelectedId(item.id)
            setIsDropDownListOpened(false)
        }
        return (
            <li key={index} onClick={onOptionClick} tabIndex={index}>{item.name}</li>
        )
    })


    return (
        <>
            <form className={style.dropDown} ref={formRef}>
                <input type="text"
                       value={name}
                       onClick={onInputClick}
                       readOnly/>
                <label tabIndex={0} onClick={onInputClick}>⌵</label>
                <div hidden={!isDropDownListOpened}>
                    <ul className={style.dropDownListOpened}>
                        {options}
                    </ul>
                </div>
            </form>
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