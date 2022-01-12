import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, useEffect} from 'react';
import style from './EditableNumberInput.module.scss'
import {observer} from 'mobx-react-lite';

type PropsType = {
    propertyValue: number
    fieldName: string
    setSelectedItem: (value: string | number | boolean | null | string[], fieldName: string) => void
    additionalModel: {
        numberInputValue: number
        setInputValue: (value: number) => void
        isEditMode: boolean
        setIsEditMode: (value: boolean) => void
    }
}

export const EditableNumberInput: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    useEffect(() => {
        additionalModel.setInputValue(propertyValue)
    }, [additionalModel, propertyValue])

    const onInputNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '') {
            additionalModel.setInputValue(0)
        } else additionalModel.setInputValue(Number(e.currentTarget.value))
    }

    const onInputNumberBlur = (e: FocusEvent<HTMLInputElement>) => {
        setSelectedItem(Number(e.target.value), fieldName)
        additionalModel.setIsEditMode(false)
    }

    const onInputNumberKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === '.' || e.key === '-' || e.key === '+' || e.key === 'e') {
            e.preventDefault()
        }
    }

    const onButtonClick = () => {
        additionalModel.setIsEditMode(true)
    }

    const stringValue = additionalModel.numberInputValue.toString()

    const onInputTextChange = () => {
        additionalModel.setInputValue(0)
        additionalModel.setIsEditMode(false)
    }

    const onInputTextBlur = () => {
        setSelectedItem(2147483647, fieldName)
        additionalModel.setIsEditMode(false)
    }

    return (
        <>
            <div className={style.editableNumberInput} tabIndex={0}>
                {!additionalModel.isEditMode

                    ? <input type="number" min={0} step={1} value={stringValue}
                             onChange={onInputNumberChange} onBlur={onInputNumberBlur} onKeyDown={onInputNumberKeyDown}/>

                    : <input type="text" value="Не ограничено" onChange={onInputTextChange} onBlur={onInputTextBlur}/>}

                <button onClick={onButtonClick} tabIndex={0}>...</button>
            </div>

            {/*<div className={style.editableNumberInput} tabIndex={0}>*/}
            {/*    {!additionalModel.isEditMode*/}
            {/*        ? <input type="text" value={stringValue} pattern="\d+"*/}
            {/*                 onChange={onInputChange} onBlur={onInputBlur} onKeyDown={onInputKeyDown}/>*/}
            {/*        : <div>{'Не ограничено'}</div>}*/}
            {/*    <button onClick={onButtonClick} tabIndex={0}>...</button>*/}
            {/*</div>*/}
        </>
    )
})