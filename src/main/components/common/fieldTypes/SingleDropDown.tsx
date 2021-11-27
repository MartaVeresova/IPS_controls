import React, {FC, useState} from 'react';
import style from './SingleDropDown.module.scss'
import {BsChevronDown} from 'react-icons/all';

type singleDropDownDataType = {
    id: number
    option: string
}

const singleDropDownData: singleDropDownDataType[] = [
    {id: 1, option: 'да'},
    {id: 2, option: 'нет'},
    {id: 3, option: 'да'},
    {id: 4, option: 'нет'},
    {id: 5, option: 'нет'},
    {id: 6, option: 'нет'},
    {id: 7, option: 'нет'},
    {id: 8, option: 'нет'},
    {id: 9, option: 'нет'},
    {id: 10, option: 'нет'},
    {id: 11, option: 'нет'},
    {id: 12, option: 'нет'},
    {id: 13, option: 'нет'},
    {id: 14, option: 'нет'},
    {id: 15, option: 'нет'},
    {id: 16, option: 'нет'},
    {id: 17, option: 'нет'},
    {id: 18, option: 'нет'},
    {id: 19, option: 'нет'},
]

export const SingleDropDown: FC = () => {

    const [state, setState] = useState(false)
    const [selectOption, setSelectOption] = useState('')


    const onDropDownClick = () => {
        setState(!state)
    }

    const onBlur = () => {
        console.log('onBlur')
        // setState(false)
    }

    return (
        <>
            <form className={style.container}>
                <div className={style.dropdown}>
                    <div className={style.select}>
                        <input type="text" className={style.input} name="gender" value={selectOption} readOnly/>
                        {/*<i className={style['fa fa-chevron-left']}>*/}
                        <BsChevronDown tabIndex={0} className={style.icon} onClick={onDropDownClick} onBlur={onBlur}/>

                        {/*</i>*/}
                    </div>

                    <ul className={state ? style['dropdown-menu'] : style['dropdown-menu-none']}>
                        {
                            singleDropDownData.map(option => {
                                const onSelectOption = () => {
                                    setSelectOption(option.option)
                                    setState(false)
                                }

                                return (
                                    <li key={option.id} onClick={onSelectOption}>{option.option}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </form>
        </>
    )
}

