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
        isNumberMode: boolean
        setIsNumberMode: (value: boolean) => void
    }
}

export const EditableNumberInput: FC<PropsType> = observer(props => {
    const {propertyValue, fieldName, setSelectedItem, additionalModel} = props

    useEffect(() => {
        if (propertyValue === maxValue) {
            additionalModel.setInputValue(maxValue)
            additionalModel.setIsNumberMode(false)
        } else additionalModel.setInputValue(propertyValue)
    }, [additionalModel, propertyValue])

    const maxValue = 2147483647
    const stringValue = additionalModel.numberInputValue.toString()

    const onInputNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '') {
            additionalModel.setInputValue(0)
        }
        if (Number(e.currentTarget.value) > maxValue) {
            additionalModel.setInputValue(maxValue)
            additionalModel.setIsNumberMode(false)
        } else additionalModel.setInputValue(Number(e.currentTarget.value))
    }

    const onInputNumberKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === '.' || e.key === '-' || e.key === '+' || e.key === 'e') {
            e.preventDefault()
        }
    }

    const onInputNumberBlur = (e: FocusEvent<HTMLInputElement>) => {
        setSelectedItem(Number(e.target.value), fieldName)
    }

    const inputTextValue = () => {
        if (additionalModel.numberInputValue === maxValue || !additionalModel.isNumberMode) {
            return 'Не ограничено'
        }
    }

    const onInputTextChange = () => {
        additionalModel.setIsNumberMode(true)
        additionalModel.setInputValue(0)
    }

    const onInputTextBlur = () => {
        setSelectedItem(maxValue, fieldName)
    }

    const onButtonClick = () => {
        additionalModel.setIsNumberMode(false)
        setSelectedItem(maxValue, fieldName)
    }


    return (
        <>
            <div className={style.editableNumberInput}>
                {additionalModel.isNumberMode
                    ? <input className={style.numberInput} type="number" min={0} step={1} value={stringValue} onChange={onInputNumberChange}
                             onKeyDown={onInputNumberKeyDown} onBlur={onInputNumberBlur}/>
                    : <input  className={style.textInput} type="text" value={inputTextValue()}
                             onChange={onInputTextChange} onBlur={onInputTextBlur}/>}

                <button className={style.notLimitedValue} onClick={onButtonClick}>...</button>
            </div>
        </>
    )
})