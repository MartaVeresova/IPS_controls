import React, {FC} from 'react';
import style from './App.module.scss'
import {TabControl} from './TabControl';
import {DropDownInput} from './sectionsOfPropertiesTab/inputVarieties/DropDownInput';

export const App: FC = () => {
    return (
        <div className={style.wrap}>
            <TabControl/>
        </div>
    );
}

