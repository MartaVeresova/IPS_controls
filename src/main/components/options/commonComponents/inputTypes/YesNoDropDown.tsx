import React, {FC, useEffect} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: boolean
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    dropDownModel: any
}
type YesNoType = 'да' | 'нет'
const yesNoDropDownData: YesNoType[] = ['да', 'нет']

export const YesNoDropDown: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, dropDownModel} = props

    useEffect(() => {
        dropDownModel.setYesNoDropDownSelectedName(propertyValue ? yesNoDropDownData[0] : yesNoDropDownData[1])
    }, [dropDownModel, propertyValue])

    const onInputClick = () => {
        dropDownModel.setIsDropDownListOpened(!dropDownModel.isDropDownListOpened)
    }

    const options = yesNoDropDownData.map(item => {
        const onOptionClick = () => {
            dropDownModel.setYesNoDropDownSelectedName(item)
            setSelectedItem(item === yesNoDropDownData[0], fieldName)
            dropDownModel.setIsDropDownListOpened(false)
        }
        return <div key={item}
                    className={item === dropDownModel.yesNoSelectedName ? style.selectedItem : style.listItem}
                    onClick={onOptionClick}>{item}</div>
    })

    return (
        <>
            <GeneralDropDown isDropDownListOpened={dropDownModel.isDropDownListOpened}
                             setIsDropDownListOpened={dropDownModel.setIsDropDownListOpened}
                             selectedName={dropDownModel.yesNoSelectedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})