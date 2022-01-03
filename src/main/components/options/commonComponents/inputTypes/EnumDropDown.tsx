import React, {FC, useEffect, useState} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';


type PropsType = {
    propertyValue: string
    fieldName: string
    dropDownModel:
        & { enumSelectedName: string }
        & { enumSelectedOption: string }
        & { setEnumDropDownSelectedItem: (name: string, option: string) => void }
}

enum versionMode {
    notComputableValue = 'Абстрактный тип',
    storedValue = 'Неверсионный тип',
    multiVersion = 'Версионный тип',
}

const data: Array<string[]> = Object.entries(versionMode)

export const EnumDropDown: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, dropDownModel} = props

    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)

    useEffect(() => {
        data.forEach(([key, value]) => {
            if (key === propertyValue) {
                // console.log(JSON.parse(JSON.stringify(dropDownModel)))
                // dropDownModel.setEnumDropDownSelectedItem(key, value)
            }
        })
    }, [dropDownModel, propertyValue])

    const onInputClick = () => {
        setIsDropDownListOpened(!isDropDownListOpened)
    }

    const options = data.map(([key, value]) => {
        const onOptionClick = () => {
            dropDownModel.setEnumDropDownSelectedItem([key, value][0], [key, value][1])
            setIsDropDownListOpened(false)
        }
        return <div key={key}
                    className={value === dropDownModel.enumSelectedName ? style.selectedItem : style.listItem}
                    onClick={onOptionClick}>{value}</div>
    })

    console.log(JSON.parse(JSON.stringify(dropDownModel)))
    return (
        <>
            <GeneralDropDown isDropDownListOpened={isDropDownListOpened}
                             setIsDropDownListOpened={setIsDropDownListOpened}
                             selectedName={dropDownModel.enumSelectedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})