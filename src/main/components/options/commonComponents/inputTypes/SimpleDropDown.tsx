import React, {FC, useCallback} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';
import {SimpleDropDownType} from '../../../store/SimpleDropDownModel';

type PropsType = {
    propertyValue: number
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    dropDownModel: any
    // & { simpleDropDownList: SelectedItemType[]; }
    // & { setSimpleDropDownSelectedItem: (id: number | null, fieldName: string) => void }
    // & { getSimpleDropDownSelectedItem: (id: number | null, fieldName: string) => void }
    // & { getSimpleDropDownList: (id: number, value: string) => void }
}

export const SimpleDropDown: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, dropDownModel} = props


    const onInputClick = useCallback(() => {
        if (!dropDownModel.isDropDownListOpened) {
            dropDownModel.getSimpleDropDownList(propertyValue, fieldName)
        }
        dropDownModel.setIsDropDownListOpened(!dropDownModel.isDropDownListOpened)
    }, [dropDownModel, propertyValue, fieldName])


    const selectedElement = dropDownModel.simpleDropDownList?.find((el: SimpleDropDownType) => el.id === propertyValue)

    const options = dropDownModel.simpleDropDownList?.map((item: SimpleDropDownType) => {
        const onOptionClick = () => {
            setSelectedItem(item.id, fieldName)
            dropDownModel.setIsDropDownListOpened(false)
        }
        return (
            <div key={item.id}
                 className={selectedElement?.displayName === item.displayName ? style.selectedItem : style.listItem}
                 onClick={onOptionClick} title={item.displayName}>{item.displayName}</div>
        )
    })

    return (
        <>
            <GeneralDropDown isDropDownListOpened={dropDownModel.isDropDownListOpened}
                             setIsDropDownListOpened={dropDownModel.setIsDropDownListOpened}
                             selectedName={selectedElement?.displayName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})

