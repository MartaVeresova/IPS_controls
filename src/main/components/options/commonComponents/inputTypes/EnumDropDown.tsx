import React, {FC, useEffect} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';


type PropsType = {
    propertyValue: string
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    dropDownModel: any
        // & { enumSelectedName: string }
        // & { setEnumDropDownSelectedName: (name: string) => void }
}

enum versionMode {
    notComputableValue = 'Абстрактный тип',
    storedValue = 'Неверсионный тип',
    multiVersion = 'Версионный тип',
}

const data: Array<string[]> = Object.entries(versionMode)

export const EnumDropDown: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, dropDownModel} = props

    useEffect(() => {
        data.forEach(([key, value]) => {
            if (key === propertyValue) {
                dropDownModel.setEnumDropDownSelectedName(value)
            }
        })
    }, [dropDownModel, propertyValue])

    const onInputClick = () => {
        dropDownModel.setIsDropDownListOpened(!dropDownModel.isDropDownListOpened)
    }

    const options = data.map(([key, value]) => {
        const onOptionClick = () => {
            setSelectedItem(key, fieldName)
            dropDownModel.setEnumDropDownSelectedName([key, value][0])
            dropDownModel.setIsDropDownListOpened(false)
        }
        return <div key={key}
                    className={value === dropDownModel.enumSelectedName ? style.selectedItem : style.listItem}
                    onClick={onOptionClick}>{value}</div>
    })


    return (
        <>
            <GeneralDropDown isDropDownListOpened={dropDownModel.isDropDownListOpened}
                             setIsDropDownListOpened={dropDownModel.setIsDropDownListOpened}
                             selectedName={dropDownModel.enumSelectedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})