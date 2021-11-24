import React, {FC} from 'react';
import {DropDownList} from '@progress/kendo-react-dropdowns';


const dropDownData: string[] = ['да', 'нет']

export const DropDownInput: FC = () => {

    return (
        <>
            <DropDownList data={dropDownData}/>
        </>
    )
}