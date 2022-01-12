import React, {FC, useCallback} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';
import {SimpleDropDownType} from '../../types/Types';

type PropsType = {
    propertyValue: number
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        simpleDropDownList: SimpleDropDownType[]
        isDropDownListOpened: boolean
        getSimpleDropDownSelectedItem: (id: number | null, fieldName: string) => void
        getSimpleDropDownList: (id: number | null, fieldName: string) => void
        setIsDropDownListOpened: (value: boolean) => void
    }
}

export const SimpleDropDown: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    const onInputClick = useCallback(() => {
        if (!additionalModel.isDropDownListOpened) {
            additionalModel.getSimpleDropDownList(propertyValue, fieldName)
        }
        additionalModel.setIsDropDownListOpened(!additionalModel.isDropDownListOpened)
    }, [additionalModel, propertyValue, fieldName])


    const selectedElement = additionalModel.simpleDropDownList?.find(el => el.id === propertyValue)

    const options = additionalModel.simpleDropDownList?.map(item => {
        const onOptionClick = () => {
            setSelectedItem(item.id, fieldName)
            additionalModel.setIsDropDownListOpened(false)
        }
        return (
            <div key={item.id}
                 className={selectedElement?.displayName === item.displayName ? style.selectedListItem : style.listItems}
                 onClick={onOptionClick} title={item.displayName}>{item.displayName}</div>
        )
    })

    return (
        <>
            <GeneralDropDown isDropDownListOpened={additionalModel.isDropDownListOpened}
                             setIsDropDownListOpened={additionalModel.setIsDropDownListOpened}
                             selectedName={selectedElement?.displayName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})

