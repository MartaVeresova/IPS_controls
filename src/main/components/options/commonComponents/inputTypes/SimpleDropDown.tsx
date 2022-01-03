import React, {FC, useCallback, useState} from 'react';
import {GeneralDropDown} from '../GeneralDropDown';
import style from '../GeneralDropDown.module.scss';
import {observer} from 'mobx-react-lite';
import {SelectedItemType} from '../../../store/SimpleDropDownModal';

type PropsType = {
    propertyValue: number
    fieldName: string
    setSimpleDropDownSelectedItem: (id: number | null, fieldName: string) => void
    dropDownModel:
        & { simpleDropDownList: SelectedItemType[]; }
        & { setSimpleDropDownSelectedItem: (id: number | null, fieldName: string) => void }
        & { getSimpleSelectedItem: (id: number, value: string) => void }
        & { getSimpleDropDownList: (id: number, value: string) => void }
}

export const SimpleDropDown: FC<PropsType> = observer(props => {
    const {
        propertyValue,
        fieldName,
        setSimpleDropDownSelectedItem,
        dropDownModel
    } = props
    const [isDropDownListOpened, setIsDropDownListOpened] = useState<boolean>(false)

    // useEffect(() => {
    //     dropDownModel.getSimpleSelectedItem(propertyValue, fieldName)
    // }, [dropDownModel, propertyValue, fieldName])

    const onInputClick = useCallback(() => {
        if (!isDropDownListOpened) {
            dropDownModel.getSimpleDropDownList(propertyValue, fieldName)
            setIsDropDownListOpened(true)
        } else {
            setIsDropDownListOpened(false)
        }
    }, [dropDownModel, propertyValue, fieldName, isDropDownListOpened])


    const selectedElem = dropDownModel.simpleDropDownList?.find(el => el.id === propertyValue)
    const options = dropDownModel.simpleDropDownList?.map(item => {
        const onOptionClick = () => {
            // dropDownModel.setSimpleDropDownSelectedItem(item.id, fieldName)
            setSimpleDropDownSelectedItem(item.id, fieldName)
            setIsDropDownListOpened(false)
        }
        return (
            <div key={item.id}
                 className={selectedElem?.displayName === item.displayName ? style.selectedItem : style.listItem}
                 onClick={onOptionClick} title={item.displayName}>{item.displayName}</div>
        )
    })
    // console.log(JSON.stringify(dropDownModel.simpleDropDownList))

    return (
        <>
            <GeneralDropDown
                isDropDownListOpened={isDropDownListOpened}
                setIsDropDownListOpened={setIsDropDownListOpened}
                selectedName={selectedElem?.displayName}
                onInputClick={onInputClick}
            >
                {options}
            </GeneralDropDown>
        </>
    )
})

