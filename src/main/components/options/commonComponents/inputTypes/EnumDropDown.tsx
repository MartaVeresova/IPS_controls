import React, {FC, useEffect} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';


type PropsType = {
    propertyValue: string
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        enumDropDownData: Array<string[]>
        enumSelectedName: string
        isDropDownListOpened: boolean
        setEnumDropDownSelectedName: (name: string) => void
        setIsDropDownListOpened: (value: boolean) => void
    }
}

export const EnumDropDown: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    useEffect(() => {
        additionalModel.enumDropDownData.forEach(([key, value]) => {
            if (key === propertyValue) {
                additionalModel.setEnumDropDownSelectedName(value)
            }
        })
    }, [additionalModel, propertyValue])

    const onInputClick = () => {
        additionalModel.setIsDropDownListOpened(!additionalModel.isDropDownListOpened)
    }

    const options = additionalModel.enumDropDownData.map(([key, value]) => {
        const onOptionClick = () => {
            setSelectedItem(key, fieldName)
            additionalModel.setEnumDropDownSelectedName([key, value][0])
            additionalModel.setIsDropDownListOpened(false)
        }
        return <div key={key}
                    className={value === additionalModel.enumSelectedName ? style.selectedListItem : style.listItems}
                    onClick={onOptionClick}>{value}</div>
    })


    return (
        <>
            <GeneralDropDown isDropDownListOpened={additionalModel.isDropDownListOpened}
                             setIsDropDownListOpened={additionalModel.setIsDropDownListOpened}
                             selectedName={additionalModel.enumSelectedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})