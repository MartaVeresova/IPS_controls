import React, {FC, useCallback, useEffect} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: boolean
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        yesNoSelectedName: string,
        isDropDownListOpened: boolean,
        setYesNoDropDownSelectedName: (name: string) => void,
        setIsDropDownListOpened: (value: boolean) => void,
    }
}
type YesNoType = 'да' | 'нет'
const yesNoDropDownData: YesNoType[] = ['да', 'нет']

export const YesNoDropDown: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    useEffect(() => {
        additionalModel.setYesNoDropDownSelectedName(propertyValue ? yesNoDropDownData[0] : yesNoDropDownData[1])
    }, [additionalModel, propertyValue])

    const onInputClick = useCallback(() => {
        additionalModel.setIsDropDownListOpened(!additionalModel.isDropDownListOpened)
    }, [additionalModel])

    const options = yesNoDropDownData.map(item => {
        const onOptionClick = () => {
            additionalModel.setYesNoDropDownSelectedName(item)
            setSelectedItem(item === yesNoDropDownData[0], fieldName)
            additionalModel.setIsDropDownListOpened(false)
        }
        return <div key={item}
                    className={item === additionalModel.yesNoSelectedName ? style.selectedListItem : style.listItems}
                    onClick={onOptionClick}>{item}</div>
    })

    return (
        <>
            <GeneralDropDown isDropDownListOpened={additionalModel.isDropDownListOpened}
                             setIsDropDownListOpened={additionalModel.setIsDropDownListOpened}
                             selectedName={additionalModel.yesNoSelectedName}
                             onInputClick={onInputClick}>
                {options}
            </GeneralDropDown>
        </>
    )
})