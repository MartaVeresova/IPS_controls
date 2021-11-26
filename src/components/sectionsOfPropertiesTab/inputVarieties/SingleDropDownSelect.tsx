import React, {ChangeEvent, FC, useState} from 'react';
import style from './SingleDropDownSelect.module.scss'

type singleDropDownDataType = {
    id: number
    option: string
}

const singleDropDownData: singleDropDownDataType[] = [{id: 1, option: 'да'}, {id: 2, option: 'нет'}, {
    id: 3,
    option: 'да'
}, {id: 4, option: 'нет'}, {id: 5, option: 'нет'}, {id: 6, option: 'нет'}, {id: 7, option: 'нет'}, {
    id: 8,
    option: 'нет'
}, {id: 9, option: 'нет'}, {id: 10, option: 'нет'}, {id: 11, option: 'нет'}, {id: 12, option: 'нет'}, {
    id: 13,
    option: 'нет'
}, {id: 14, option: 'нет'}, {id: 15, option: 'нет'}, {id: 16, option: 'нет'}, {id: 17, option: 'нет'}, {
    id: 18,
    option: 'нет'
}, {id: 19, option: 'нет'}]

export const SingleDropDownSelect: FC = () => {

    const [value, onChangeOption] = useState('')
    const [isExpandedOption, setIsExpandedOption] = useState(false)

    const onSingleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value)
    }

    // const expanded = false;

    // function showCheckboxes() {
    //     let checkboxes = document.getElementById('checkboxes');
    //     if (!expanded) {
    //         checkboxes.style.display = 'block';
    //         expanded = true;
    //     } else {
    //         checkboxes.style.display = 'none';
    //         expanded = false;
    //     }
    // }

    const onCheckboxesClick = () => {
        setIsExpandedOption(!isExpandedOption)
    }


    return (
        <>
            {/*<form>*/}
            {/*    <div className={style.multiselect}>*/}
            {/*        <div className={style.selectBox} onClick={onCheckboxesClick}>*/}
            {/*            <select>*/}
            {/*                <option>Select an option</option>*/}
            {/*            </select>*/}
            {/*            <div className={style.overSelect}>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*        /!*{*!/*/}
            {/*        /!*    isExpandedOption &&*!/*/}
            {/*            <div id="checkboxes" style={isExpandedOption ? {display: 'block'} : {display: 'none'}}>*/}
            {/*                <label htmlFor="one">*/}
            {/*                    <input type="checkbox" id="one"/>First checkbox</label>*/}
            {/*                <label htmlFor="two">*/}
            {/*                    <input type="checkbox" id="two"/>Second checkbox</label>*/}
            {/*                <label htmlFor="three">*/}
            {/*                    <input type="checkbox" id="three"/>Third checkbox</label>*/}
            {/*            </div>*/}
            {/*        /!*}*!/*/}
            {/*    </div>*/}
            {/*</form>*/}

            {/*<select name="select" size={5} className={style.multiSelectStyles} onChange={onSingleSelectChange} required>*/}
            {/*    {*/}
            {/*        singleDropDownData*/}
            {/*            ? singleDropDownData.map(opt => <option key={opt.id}*/}
            {/*                                                    value={opt.option}>{opt.option}</option>)*/}
            {/*            : []*/}
            {/*    }*/}
            {/*</select>*/}


            {/*<Multiselect*/}
            {/*    style={multiSelectStyles}*/}
            {/*    displayValue="option"*/}
            {/*    placeholder=""*/}
            {/*    options={singleDropDownData}*/}
            {/*    singleSelect*/}
            {/*    avoidHighlightFirstOption*/}
            {/*/>*/}
        </>
    )
}


const multiSelectStyles = {
    searchBox: { //инпут внутри закругленных границ
        border: 'none',
        // fontSize: '5px',
        maxHeight: '50px',
        // backgroundColor: 'red'
    },
    multiselectContainer: { //само все поле
        // color: "red",
        // backgroundColor: 'red'
    },
    singleSelect: {
        paddingRight: '40px',

    },
    inputField: { //непонятный инпут
        display: 'none',
        margin: '5px',
    },
    chips: { //выбранное значение горящее в инпуте
        // background: 'red',
        // backgroundColor: 'red',
        // color: 'red'
    },
    optionContainer: { //выпадающее окно
        border: '2px solid green',
    },
    option: { //выпадающие элементы
        color: 'blue',

    },
    groupHeading: {
        // backgroundColor: 'red',
        backgroundColor: 'red',
        color: 'red'
    },
}