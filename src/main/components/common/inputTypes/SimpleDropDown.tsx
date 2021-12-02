import React, {FC, useRef, useState} from 'react';
import style from './SimpleDropDown.module.scss';
import {useOnClickOutside} from '../../../hooks/useOnClickOutside';

type SimpleDropDownType = {
    propertyValue: boolean
}

const simpleDropDownData: string[] = ['да', 'нет']

export const SimpleDropDown: FC<SimpleDropDownType> = ({propertyValue}) => {

    const [isDropDownListOpened, setIsDropDownListOpened] = useState(false)
    const [selectOption, setSelectOption] = useState<boolean>(propertyValue)
    const formRef = useRef<HTMLFormElement | null>(null);

    useOnClickOutside(formRef, () => setIsDropDownListOpened(false))

    const onInputClick = () => {
        setIsDropDownListOpened(!isDropDownListOpened)
    }

    const options = simpleDropDownData.map((item, index) => {
        const onOptionClick = () => {
            setSelectOption(item === 'да')
            setIsDropDownListOpened(false)
        }
        return (
            <li key={index} onClick={onOptionClick} tabIndex={index}>{item}</li>
        )
    })

    return (
        <>
            <form className={style.dropDown} ref={formRef}>
                <input type="text"
                       value={selectOption ? simpleDropDownData[0] : simpleDropDownData[1]}
                       onClick={onInputClick}
                       readOnly/>
                <label tabIndex={0} onClick={onInputClick}>⌵</label>
                <div hidden={!isDropDownListOpened}>
                    <ul className={style.dropDownListOpened}>
                        {options}
                    </ul>
                </div>

                {/*<ul className={isDropDownListOpened ? style.dropDownListOpened : style.dropDownListClosed}>*/}
                {/*    {options}*/}
                {/*</ul>*/}
            </form>
        </>
    )
}

{/*{*/
}
{/*    isDropDownListOpened &&*/
}
{/*    <ul*/
}
{/*        className={style.dropDownListOpened}>*/
}
{/*        {options}*/
}
{/*    </ul>*/
}
{/*}*/
}