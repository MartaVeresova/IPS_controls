import React, {FC} from 'react';
import style from './App.module.scss'
import {TabControl_2} from './TabControl_2';
import {TabControl} from './TabControl';
import {TabControl_3} from './TabControl_3';


export const App: FC = () => {
    return (
        <div className={style.wrap}>
            {/*<TabControl/>*/}
            {/*<TabControl_2/>*/}
            <TabControl_3/>
        </div>
    );
}

